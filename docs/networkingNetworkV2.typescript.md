# `opentelekomcloud_networking_network_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_networking_network_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2).

# `networkingNetworkV2` Submodule <a name="`networkingNetworkV2` Submodule" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingNetworkV2 <a name="NetworkingNetworkV2" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2 opentelekomcloud_networking_network_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.Initializer"></a>

```typescript
import { networkingNetworkV2 } from '@cdktf/provider-opentelekomcloud'

new networkingNetworkV2.NetworkingNetworkV2(scope: Construct, id: string, config?: NetworkingNetworkV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config">NetworkingNetworkV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config">NetworkingNetworkV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.putSegments">putSegments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetSegments">resetSegments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetShared">resetShared</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetValueSpecs">resetValueSpecs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSegments` <a name="putSegments" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.putSegments"></a>

```typescript
public putSegments(value: IResolvable | NetworkingNetworkV2Segments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.putSegments.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments">NetworkingNetworkV2Segments</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkingNetworkV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Timeouts">NetworkingNetworkV2Timeouts</a>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetAdminStateUp"></a>

```typescript
public resetAdminStateUp(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSegments` <a name="resetSegments" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetSegments"></a>

```typescript
public resetSegments(): void
```

##### `resetShared` <a name="resetShared" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetShared"></a>

```typescript
public resetShared(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValueSpecs` <a name="resetValueSpecs" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.resetValueSpecs"></a>

```typescript
public resetValueSpecs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.isConstruct"></a>

```typescript
import { networkingNetworkV2 } from '@cdktf/provider-opentelekomcloud'

networkingNetworkV2.NetworkingNetworkV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.isTerraformElement"></a>

```typescript
import { networkingNetworkV2 } from '@cdktf/provider-opentelekomcloud'

networkingNetworkV2.NetworkingNetworkV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.isTerraformResource"></a>

```typescript
import { networkingNetworkV2 } from '@cdktf/provider-opentelekomcloud'

networkingNetworkV2.NetworkingNetworkV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.segments">segments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList">NetworkingNetworkV2SegmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference">NetworkingNetworkV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.adminStateUpInput">adminStateUpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.segmentsInput">segmentsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments">NetworkingNetworkV2Segments</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.sharedInput">sharedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Timeouts">NetworkingNetworkV2Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.valueSpecsInput">valueSpecsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.adminStateUp">adminStateUp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.shared">shared</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.segments"></a>

```typescript
public readonly segments: NetworkingNetworkV2SegmentsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList">NetworkingNetworkV2SegmentsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkingNetworkV2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference">NetworkingNetworkV2TimeoutsOutputReference</a>

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.adminStateUpInput"></a>

```typescript
public readonly adminStateUpInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `segmentsInput`<sup>Optional</sup> <a name="segmentsInput" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.segmentsInput"></a>

```typescript
public readonly segmentsInput: IResolvable | NetworkingNetworkV2Segments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments">NetworkingNetworkV2Segments</a>[]

---

##### `sharedInput`<sup>Optional</sup> <a name="sharedInput" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.sharedInput"></a>

```typescript
public readonly sharedInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: NetworkingNetworkV2Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Timeouts">NetworkingNetworkV2Timeouts</a> | cdktf.IResolvable

---

##### `valueSpecsInput`<sup>Optional</sup> <a name="valueSpecsInput" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.valueSpecsInput"></a>

```typescript
public readonly valueSpecsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `shared`<sup>Required</sup> <a name="shared" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.shared"></a>

```typescript
public readonly shared: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `valueSpecs`<sup>Required</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingNetworkV2Config <a name="NetworkingNetworkV2Config" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.Initializer"></a>

```typescript
import { networkingNetworkV2 } from '@cdktf/provider-opentelekomcloud'

const networkingNetworkV2Config: networkingNetworkV2.NetworkingNetworkV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.adminStateUp">adminStateUp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#admin_state_up NetworkingNetworkV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#id NetworkingNetworkV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#name NetworkingNetworkV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#region NetworkingNetworkV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.segments">segments</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments">NetworkingNetworkV2Segments</a>[]</code> | segments block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.shared">shared</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#shared NetworkingNetworkV2#shared}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#tenant_id NetworkingNetworkV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Timeouts">NetworkingNetworkV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#value_specs NetworkingNetworkV2#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#admin_state_up NetworkingNetworkV2#admin_state_up}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#id NetworkingNetworkV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#name NetworkingNetworkV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#region NetworkingNetworkV2#region}.

---

##### `segments`<sup>Optional</sup> <a name="segments" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.segments"></a>

```typescript
public readonly segments: IResolvable | NetworkingNetworkV2Segments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments">NetworkingNetworkV2Segments</a>[]

segments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#segments NetworkingNetworkV2#segments}

---

##### `shared`<sup>Optional</sup> <a name="shared" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.shared"></a>

```typescript
public readonly shared: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#shared NetworkingNetworkV2#shared}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#tenant_id NetworkingNetworkV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkingNetworkV2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Timeouts">NetworkingNetworkV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#timeouts NetworkingNetworkV2#timeouts}

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Config.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#value_specs NetworkingNetworkV2#value_specs}.

---

### NetworkingNetworkV2Segments <a name="NetworkingNetworkV2Segments" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments.Initializer"></a>

```typescript
import { networkingNetworkV2 } from '@cdktf/provider-opentelekomcloud'

const networkingNetworkV2Segments: networkingNetworkV2.NetworkingNetworkV2Segments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments.property.networkType">networkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#network_type NetworkingNetworkV2#network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments.property.physicalNetwork">physicalNetwork</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#physical_network NetworkingNetworkV2#physical_network}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments.property.segmentationId">segmentationId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#segmentation_id NetworkingNetworkV2#segmentation_id}. |

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#network_type NetworkingNetworkV2#network_type}.

---

##### `physicalNetwork`<sup>Optional</sup> <a name="physicalNetwork" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments.property.physicalNetwork"></a>

```typescript
public readonly physicalNetwork: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#physical_network NetworkingNetworkV2#physical_network}.

---

##### `segmentationId`<sup>Optional</sup> <a name="segmentationId" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments.property.segmentationId"></a>

```typescript
public readonly segmentationId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#segmentation_id NetworkingNetworkV2#segmentation_id}.

---

### NetworkingNetworkV2Timeouts <a name="NetworkingNetworkV2Timeouts" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Timeouts.Initializer"></a>

```typescript
import { networkingNetworkV2 } from '@cdktf/provider-opentelekomcloud'

const networkingNetworkV2Timeouts: networkingNetworkV2.NetworkingNetworkV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#create NetworkingNetworkV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#delete NetworkingNetworkV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#create NetworkingNetworkV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/networking_network_v2#delete NetworkingNetworkV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkingNetworkV2SegmentsList <a name="NetworkingNetworkV2SegmentsList" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.Initializer"></a>

```typescript
import { networkingNetworkV2 } from '@cdktf/provider-opentelekomcloud'

new networkingNetworkV2.NetworkingNetworkV2SegmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.get"></a>

```typescript
public get(index: number): NetworkingNetworkV2SegmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments">NetworkingNetworkV2Segments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingNetworkV2Segments[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments">NetworkingNetworkV2Segments</a>[]

---


### NetworkingNetworkV2SegmentsOutputReference <a name="NetworkingNetworkV2SegmentsOutputReference" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.Initializer"></a>

```typescript
import { networkingNetworkV2 } from '@cdktf/provider-opentelekomcloud'

new networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.resetPhysicalNetwork">resetPhysicalNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.resetSegmentationId">resetSegmentationId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetPhysicalNetwork` <a name="resetPhysicalNetwork" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.resetPhysicalNetwork"></a>

```typescript
public resetPhysicalNetwork(): void
```

##### `resetSegmentationId` <a name="resetSegmentationId" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.resetSegmentationId"></a>

```typescript
public resetSegmentationId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.physicalNetworkInput">physicalNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.segmentationIdInput">segmentationIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.physicalNetwork">physicalNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.segmentationId">segmentationId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments">NetworkingNetworkV2Segments</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `physicalNetworkInput`<sup>Optional</sup> <a name="physicalNetworkInput" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.physicalNetworkInput"></a>

```typescript
public readonly physicalNetworkInput: string;
```

- *Type:* string

---

##### `segmentationIdInput`<sup>Optional</sup> <a name="segmentationIdInput" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.segmentationIdInput"></a>

```typescript
public readonly segmentationIdInput: number;
```

- *Type:* number

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `physicalNetwork`<sup>Required</sup> <a name="physicalNetwork" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.physicalNetwork"></a>

```typescript
public readonly physicalNetwork: string;
```

- *Type:* string

---

##### `segmentationId`<sup>Required</sup> <a name="segmentationId" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.segmentationId"></a>

```typescript
public readonly segmentationId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2SegmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkingNetworkV2Segments | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Segments">NetworkingNetworkV2Segments</a> | cdktf.IResolvable

---


### NetworkingNetworkV2TimeoutsOutputReference <a name="NetworkingNetworkV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { networkingNetworkV2 } from '@cdktf/provider-opentelekomcloud'

new networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Timeouts">NetworkingNetworkV2Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkingNetworkV2Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingNetworkV2.NetworkingNetworkV2Timeouts">NetworkingNetworkV2Timeouts</a> | cdktf.IResolvable

---



