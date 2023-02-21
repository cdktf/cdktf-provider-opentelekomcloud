# `sdrsProtectiongroupV1` Submodule <a name="`sdrsProtectiongroupV1` Submodule" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SdrsProtectiongroupV1 <a name="SdrsProtectiongroupV1" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1 opentelekomcloud_sdrs_protectiongroup_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer"></a>

```typescript
import { sdrsProtectiongroupV1 } from '@cdktf/provider-opentelekomcloud'

new sdrsProtectiongroupV1.SdrsProtectiongroupV1(scope: Construct, id: string, config: SdrsProtectiongroupV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config">SdrsProtectiongroupV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config">SdrsProtectiongroupV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetDrType">resetDrType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.putTimeouts"></a>

```typescript
public putTimeouts(value: SdrsProtectiongroupV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDrType` <a name="resetDrType" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetDrType"></a>

```typescript
public resetDrType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isConstruct"></a>

```typescript
import { sdrsProtectiongroupV1 } from '@cdktf/provider-opentelekomcloud'

sdrsProtectiongroupV1.SdrsProtectiongroupV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isTerraformElement"></a>

```typescript
import { sdrsProtectiongroupV1 } from '@cdktf/provider-opentelekomcloud'

sdrsProtectiongroupV1.SdrsProtectiongroupV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isTerraformResource"></a>

```typescript
import { sdrsProtectiongroupV1 } from '@cdktf/provider-opentelekomcloud'

sdrsProtectiongroupV1.SdrsProtectiongroupV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference">SdrsProtectiongroupV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.drTypeInput">drTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceAvailabilityZoneInput">sourceAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceVpcIdInput">sourceVpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.targetAvailabilityZoneInput">targetAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.drType">drType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceAvailabilityZone">sourceAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceVpcId">sourceVpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.targetAvailabilityZone">targetAvailabilityZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.timeouts"></a>

```typescript
public readonly timeouts: SdrsProtectiongroupV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference">SdrsProtectiongroupV1TimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `drTypeInput`<sup>Optional</sup> <a name="drTypeInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.drTypeInput"></a>

```typescript
public readonly drTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceAvailabilityZoneInput`<sup>Optional</sup> <a name="sourceAvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceAvailabilityZoneInput"></a>

```typescript
public readonly sourceAvailabilityZoneInput: string;
```

- *Type:* string

---

##### `sourceVpcIdInput`<sup>Optional</sup> <a name="sourceVpcIdInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceVpcIdInput"></a>

```typescript
public readonly sourceVpcIdInput: string;
```

- *Type:* string

---

##### `targetAvailabilityZoneInput`<sup>Optional</sup> <a name="targetAvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.targetAvailabilityZoneInput"></a>

```typescript
public readonly targetAvailabilityZoneInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SdrsProtectiongroupV1Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `drType`<sup>Required</sup> <a name="drType" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.drType"></a>

```typescript
public readonly drType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceAvailabilityZone`<sup>Required</sup> <a name="sourceAvailabilityZone" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceAvailabilityZone"></a>

```typescript
public readonly sourceAvailabilityZone: string;
```

- *Type:* string

---

##### `sourceVpcId`<sup>Required</sup> <a name="sourceVpcId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceVpcId"></a>

```typescript
public readonly sourceVpcId: string;
```

- *Type:* string

---

##### `targetAvailabilityZone`<sup>Required</sup> <a name="targetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.targetAvailabilityZone"></a>

```typescript
public readonly targetAvailabilityZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SdrsProtectiongroupV1Config <a name="SdrsProtectiongroupV1Config" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.Initializer"></a>

```typescript
import { sdrsProtectiongroupV1 } from '@cdktf/provider-opentelekomcloud'

const sdrsProtectiongroupV1Config: sdrsProtectiongroupV1.SdrsProtectiongroupV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.domainId">domainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#domain_id SdrsProtectiongroupV1#domain_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#name SdrsProtectiongroupV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.sourceAvailabilityZone">sourceAvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#source_availability_zone SdrsProtectiongroupV1#source_availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.sourceVpcId">sourceVpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#source_vpc_id SdrsProtectiongroupV1#source_vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.targetAvailabilityZone">targetAvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#target_availability_zone SdrsProtectiongroupV1#target_availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#description SdrsProtectiongroupV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.drType">drType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#dr_type SdrsProtectiongroupV1#dr_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#id SdrsProtectiongroupV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#domain_id SdrsProtectiongroupV1#domain_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#name SdrsProtectiongroupV1#name}.

---

##### `sourceAvailabilityZone`<sup>Required</sup> <a name="sourceAvailabilityZone" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.sourceAvailabilityZone"></a>

```typescript
public readonly sourceAvailabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#source_availability_zone SdrsProtectiongroupV1#source_availability_zone}.

---

##### `sourceVpcId`<sup>Required</sup> <a name="sourceVpcId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.sourceVpcId"></a>

```typescript
public readonly sourceVpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#source_vpc_id SdrsProtectiongroupV1#source_vpc_id}.

---

##### `targetAvailabilityZone`<sup>Required</sup> <a name="targetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.targetAvailabilityZone"></a>

```typescript
public readonly targetAvailabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#target_availability_zone SdrsProtectiongroupV1#target_availability_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#description SdrsProtectiongroupV1#description}.

---

##### `drType`<sup>Optional</sup> <a name="drType" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.drType"></a>

```typescript
public readonly drType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#dr_type SdrsProtectiongroupV1#dr_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#id SdrsProtectiongroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: SdrsProtectiongroupV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#timeouts SdrsProtectiongroupV1#timeouts}

---

### SdrsProtectiongroupV1Timeouts <a name="SdrsProtectiongroupV1Timeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts.Initializer"></a>

```typescript
import { sdrsProtectiongroupV1 } from '@cdktf/provider-opentelekomcloud'

const sdrsProtectiongroupV1Timeouts: sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#create SdrsProtectiongroupV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#delete SdrsProtectiongroupV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#create SdrsProtectiongroupV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/sdrs_protectiongroup_v1#delete SdrsProtectiongroupV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SdrsProtectiongroupV1TimeoutsOutputReference <a name="SdrsProtectiongroupV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { sdrsProtectiongroupV1 } from '@cdktf/provider-opentelekomcloud'

new sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SdrsProtectiongroupV1Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a> | cdktf.IResolvable

---



