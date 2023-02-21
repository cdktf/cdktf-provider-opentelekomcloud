# `networkingSecgroupRuleV2` Submodule <a name="`networkingSecgroupRuleV2` Submodule" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingSecgroupRuleV2 <a name="NetworkingSecgroupRuleV2" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2 opentelekomcloud_networking_secgroup_rule_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer"></a>

```typescript
import { networkingSecgroupRuleV2 } from '@cdktf/provider-opentelekomcloud'

new networkingSecgroupRuleV2.NetworkingSecgroupRuleV2(scope: Construct, id: string, config: NetworkingSecgroupRuleV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config">NetworkingSecgroupRuleV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config">NetworkingSecgroupRuleV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetPortRangeMax">resetPortRangeMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetPortRangeMin">resetPortRangeMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetRemoteGroupId">resetRemoteGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetRemoteIpPrefix">resetRemoteIpPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkingSecgroupRuleV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPortRangeMax` <a name="resetPortRangeMax" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetPortRangeMax"></a>

```typescript
public resetPortRangeMax(): void
```

##### `resetPortRangeMin` <a name="resetPortRangeMin" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetPortRangeMin"></a>

```typescript
public resetPortRangeMin(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRemoteGroupId` <a name="resetRemoteGroupId" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetRemoteGroupId"></a>

```typescript
public resetRemoteGroupId(): void
```

##### `resetRemoteIpPrefix` <a name="resetRemoteIpPrefix" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetRemoteIpPrefix"></a>

```typescript
public resetRemoteIpPrefix(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isConstruct"></a>

```typescript
import { networkingSecgroupRuleV2 } from '@cdktf/provider-opentelekomcloud'

networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isTerraformElement"></a>

```typescript
import { networkingSecgroupRuleV2 } from '@cdktf/provider-opentelekomcloud'

networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isTerraformResource"></a>

```typescript
import { networkingSecgroupRuleV2 } from '@cdktf/provider-opentelekomcloud'

networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference">NetworkingSecgroupRuleV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.ethertypeInput">ethertypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMaxInput">portRangeMaxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMinInput">portRangeMinInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteGroupIdInput">remoteGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteIpPrefixInput">remoteIpPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.ethertype">ethertype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMax">portRangeMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMin">portRangeMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteGroupId">remoteGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteIpPrefix">remoteIpPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkingSecgroupRuleV2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference">NetworkingSecgroupRuleV2TimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `ethertypeInput`<sup>Optional</sup> <a name="ethertypeInput" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.ethertypeInput"></a>

```typescript
public readonly ethertypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `portRangeMaxInput`<sup>Optional</sup> <a name="portRangeMaxInput" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMaxInput"></a>

```typescript
public readonly portRangeMaxInput: number;
```

- *Type:* number

---

##### `portRangeMinInput`<sup>Optional</sup> <a name="portRangeMinInput" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMinInput"></a>

```typescript
public readonly portRangeMinInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `remoteGroupIdInput`<sup>Optional</sup> <a name="remoteGroupIdInput" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteGroupIdInput"></a>

```typescript
public readonly remoteGroupIdInput: string;
```

- *Type:* string

---

##### `remoteIpPrefixInput`<sup>Optional</sup> <a name="remoteIpPrefixInput" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteIpPrefixInput"></a>

```typescript
public readonly remoteIpPrefixInput: string;
```

- *Type:* string

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: NetworkingSecgroupRuleV2Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `ethertype`<sup>Required</sup> <a name="ethertype" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.ethertype"></a>

```typescript
public readonly ethertype: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `portRangeMax`<sup>Required</sup> <a name="portRangeMax" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMax"></a>

```typescript
public readonly portRangeMax: number;
```

- *Type:* number

---

##### `portRangeMin`<sup>Required</sup> <a name="portRangeMin" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.portRangeMin"></a>

```typescript
public readonly portRangeMin: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `remoteGroupId`<sup>Required</sup> <a name="remoteGroupId" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteGroupId"></a>

```typescript
public readonly remoteGroupId: string;
```

- *Type:* string

---

##### `remoteIpPrefix`<sup>Required</sup> <a name="remoteIpPrefix" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.remoteIpPrefix"></a>

```typescript
public readonly remoteIpPrefix: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingSecgroupRuleV2Config <a name="NetworkingSecgroupRuleV2Config" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.Initializer"></a>

```typescript
import { networkingSecgroupRuleV2 } from '@cdktf/provider-opentelekomcloud'

const networkingSecgroupRuleV2Config: networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.direction">direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#direction NetworkingSecgroupRuleV2#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.ethertype">ethertype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#ethertype NetworkingSecgroupRuleV2#ethertype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#security_group_id NetworkingSecgroupRuleV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#description NetworkingSecgroupRuleV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#id NetworkingSecgroupRuleV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.portRangeMax">portRangeMax</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#port_range_max NetworkingSecgroupRuleV2#port_range_max}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.portRangeMin">portRangeMin</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#port_range_min NetworkingSecgroupRuleV2#port_range_min}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#protocol NetworkingSecgroupRuleV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#region NetworkingSecgroupRuleV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.remoteGroupId">remoteGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#remote_group_id NetworkingSecgroupRuleV2#remote_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.remoteIpPrefix">remoteIpPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#remote_ip_prefix NetworkingSecgroupRuleV2#remote_ip_prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#tenant_id NetworkingSecgroupRuleV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#direction NetworkingSecgroupRuleV2#direction}.

---

##### `ethertype`<sup>Required</sup> <a name="ethertype" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.ethertype"></a>

```typescript
public readonly ethertype: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#ethertype NetworkingSecgroupRuleV2#ethertype}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#security_group_id NetworkingSecgroupRuleV2#security_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#description NetworkingSecgroupRuleV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#id NetworkingSecgroupRuleV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `portRangeMax`<sup>Optional</sup> <a name="portRangeMax" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.portRangeMax"></a>

```typescript
public readonly portRangeMax: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#port_range_max NetworkingSecgroupRuleV2#port_range_max}.

---

##### `portRangeMin`<sup>Optional</sup> <a name="portRangeMin" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.portRangeMin"></a>

```typescript
public readonly portRangeMin: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#port_range_min NetworkingSecgroupRuleV2#port_range_min}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#protocol NetworkingSecgroupRuleV2#protocol}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#region NetworkingSecgroupRuleV2#region}.

---

##### `remoteGroupId`<sup>Optional</sup> <a name="remoteGroupId" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.remoteGroupId"></a>

```typescript
public readonly remoteGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#remote_group_id NetworkingSecgroupRuleV2#remote_group_id}.

---

##### `remoteIpPrefix`<sup>Optional</sup> <a name="remoteIpPrefix" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.remoteIpPrefix"></a>

```typescript
public readonly remoteIpPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#remote_ip_prefix NetworkingSecgroupRuleV2#remote_ip_prefix}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#tenant_id NetworkingSecgroupRuleV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkingSecgroupRuleV2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#timeouts NetworkingSecgroupRuleV2#timeouts}

---

### NetworkingSecgroupRuleV2Timeouts <a name="NetworkingSecgroupRuleV2Timeouts" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts.Initializer"></a>

```typescript
import { networkingSecgroupRuleV2 } from '@cdktf/provider-opentelekomcloud'

const networkingSecgroupRuleV2Timeouts: networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#delete NetworkingSecgroupRuleV2#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_secgroup_rule_v2#delete NetworkingSecgroupRuleV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkingSecgroupRuleV2TimeoutsOutputReference <a name="NetworkingSecgroupRuleV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { networkingSecgroupRuleV2 } from '@cdktf/provider-opentelekomcloud'

new networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkingSecgroupRuleV2Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingSecgroupRuleV2.NetworkingSecgroupRuleV2Timeouts">NetworkingSecgroupRuleV2Timeouts</a> | cdktf.IResolvable

---



