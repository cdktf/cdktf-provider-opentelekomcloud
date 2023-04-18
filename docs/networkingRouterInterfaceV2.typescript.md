# `opentelekomcloud_networking_router_interface_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_networking_router_interface_v2`](https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2).

# `networkingRouterInterfaceV2` Submodule <a name="`networkingRouterInterfaceV2` Submodule" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingRouterInterfaceV2 <a name="NetworkingRouterInterfaceV2" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2 opentelekomcloud_networking_router_interface_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.Initializer"></a>

```typescript
import { networkingRouterInterfaceV2 } from '@cdktf/provider-opentelekomcloud'

new networkingRouterInterfaceV2.NetworkingRouterInterfaceV2(scope: Construct, id: string, config: NetworkingRouterInterfaceV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config">NetworkingRouterInterfaceV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config">NetworkingRouterInterfaceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.resetPortId">resetPortId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkingRouterInterfaceV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Timeouts">NetworkingRouterInterfaceV2Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPortId` <a name="resetPortId" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.resetPortId"></a>

```typescript
public resetPortId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.isConstruct"></a>

```typescript
import { networkingRouterInterfaceV2 } from '@cdktf/provider-opentelekomcloud'

networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.isTerraformElement"></a>

```typescript
import { networkingRouterInterfaceV2 } from '@cdktf/provider-opentelekomcloud'

networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.isTerraformResource"></a>

```typescript
import { networkingRouterInterfaceV2 } from '@cdktf/provider-opentelekomcloud'

networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference">NetworkingRouterInterfaceV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.portIdInput">portIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.routerIdInput">routerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Timeouts">NetworkingRouterInterfaceV2Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.portId">portId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.routerId">routerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkingRouterInterfaceV2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference">NetworkingRouterInterfaceV2TimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `portIdInput`<sup>Optional</sup> <a name="portIdInput" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.portIdInput"></a>

```typescript
public readonly portIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routerIdInput`<sup>Optional</sup> <a name="routerIdInput" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.routerIdInput"></a>

```typescript
public readonly routerIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: NetworkingRouterInterfaceV2Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Timeouts">NetworkingRouterInterfaceV2Timeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `portId`<sup>Required</sup> <a name="portId" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.portId"></a>

```typescript
public readonly portId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `routerId`<sup>Required</sup> <a name="routerId" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.routerId"></a>

```typescript
public readonly routerId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingRouterInterfaceV2Config <a name="NetworkingRouterInterfaceV2Config" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.Initializer"></a>

```typescript
import { networkingRouterInterfaceV2 } from '@cdktf/provider-opentelekomcloud'

const networkingRouterInterfaceV2Config: networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.routerId">routerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#router_id NetworkingRouterInterfaceV2#router_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#id NetworkingRouterInterfaceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.portId">portId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#port_id NetworkingRouterInterfaceV2#port_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#region NetworkingRouterInterfaceV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#subnet_id NetworkingRouterInterfaceV2#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Timeouts">NetworkingRouterInterfaceV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `routerId`<sup>Required</sup> <a name="routerId" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.routerId"></a>

```typescript
public readonly routerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#router_id NetworkingRouterInterfaceV2#router_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#id NetworkingRouterInterfaceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `portId`<sup>Optional</sup> <a name="portId" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.portId"></a>

```typescript
public readonly portId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#port_id NetworkingRouterInterfaceV2#port_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#region NetworkingRouterInterfaceV2#region}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#subnet_id NetworkingRouterInterfaceV2#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkingRouterInterfaceV2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Timeouts">NetworkingRouterInterfaceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#timeouts NetworkingRouterInterfaceV2#timeouts}

---

### NetworkingRouterInterfaceV2Timeouts <a name="NetworkingRouterInterfaceV2Timeouts" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Timeouts.Initializer"></a>

```typescript
import { networkingRouterInterfaceV2 } from '@cdktf/provider-opentelekomcloud'

const networkingRouterInterfaceV2Timeouts: networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#create NetworkingRouterInterfaceV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#delete NetworkingRouterInterfaceV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#create NetworkingRouterInterfaceV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_interface_v2#delete NetworkingRouterInterfaceV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkingRouterInterfaceV2TimeoutsOutputReference <a name="NetworkingRouterInterfaceV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { networkingRouterInterfaceV2 } from '@cdktf/provider-opentelekomcloud'

new networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Timeouts">NetworkingRouterInterfaceV2Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkingRouterInterfaceV2Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingRouterInterfaceV2.NetworkingRouterInterfaceV2Timeouts">NetworkingRouterInterfaceV2Timeouts</a> | cdktf.IResolvable

---



