# `dcVirtualInterfaceV3` Submodule <a name="`dcVirtualInterfaceV3` Submodule" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcVirtualInterfaceV3 <a name="DcVirtualInterfaceV3" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3 opentelekomcloud_dc_virtual_interface_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer"></a>

```typescript
import { dcVirtualInterfaceV3 } from '@cdktf/provider-opentelekomcloud'

new dcVirtualInterfaceV3.DcVirtualInterfaceV3(scope: Construct, id: string, config: DcVirtualInterfaceV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config">DcVirtualInterfaceV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config">DcVirtualInterfaceV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetAddressFamily">resetAddressFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetAsn">resetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetBgpMd5">resetBgpMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetEnableBfd">resetEnableBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetEnableNqa">resetEnableNqa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetLagId">resetLagId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetLocalGatewayV4Ip">resetLocalGatewayV4Ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetLocalGatewayV6Ip">resetLocalGatewayV6Ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetRemoteGatewayV4Ip">resetRemoteGatewayV4Ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetRemoteGatewayV6Ip">resetRemoteGatewayV6Ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetResourceTenantId">resetResourceTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetServiceEpGroup">resetServiceEpGroup</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAddressFamily` <a name="resetAddressFamily" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetAddressFamily"></a>

```typescript
public resetAddressFamily(): void
```

##### `resetAsn` <a name="resetAsn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetAsn"></a>

```typescript
public resetAsn(): void
```

##### `resetBgpMd5` <a name="resetBgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetBgpMd5"></a>

```typescript
public resetBgpMd5(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableBfd` <a name="resetEnableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetEnableBfd"></a>

```typescript
public resetEnableBfd(): void
```

##### `resetEnableNqa` <a name="resetEnableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetEnableNqa"></a>

```typescript
public resetEnableNqa(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLagId` <a name="resetLagId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetLagId"></a>

```typescript
public resetLagId(): void
```

##### `resetLocalGatewayV4Ip` <a name="resetLocalGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetLocalGatewayV4Ip"></a>

```typescript
public resetLocalGatewayV4Ip(): void
```

##### `resetLocalGatewayV6Ip` <a name="resetLocalGatewayV6Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetLocalGatewayV6Ip"></a>

```typescript
public resetLocalGatewayV6Ip(): void
```

##### `resetRemoteGatewayV4Ip` <a name="resetRemoteGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetRemoteGatewayV4Ip"></a>

```typescript
public resetRemoteGatewayV4Ip(): void
```

##### `resetRemoteGatewayV6Ip` <a name="resetRemoteGatewayV6Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetRemoteGatewayV6Ip"></a>

```typescript
public resetRemoteGatewayV6Ip(): void
```

##### `resetResourceTenantId` <a name="resetResourceTenantId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetResourceTenantId"></a>

```typescript
public resetResourceTenantId(): void
```

##### `resetServiceEpGroup` <a name="resetServiceEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.resetServiceEpGroup"></a>

```typescript
public resetServiceEpGroup(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DcVirtualInterfaceV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isConstruct"></a>

```typescript
import { dcVirtualInterfaceV3 } from '@cdktf/provider-opentelekomcloud'

dcVirtualInterfaceV3.DcVirtualInterfaceV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isTerraformElement"></a>

```typescript
import { dcVirtualInterfaceV3 } from '@cdktf/provider-opentelekomcloud'

dcVirtualInterfaceV3.DcVirtualInterfaceV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isTerraformResource"></a>

```typescript
import { dcVirtualInterfaceV3 } from '@cdktf/provider-opentelekomcloud'

dcVirtualInterfaceV3.DcVirtualInterfaceV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.generateConfigForImport"></a>

```typescript
import { dcVirtualInterfaceV3 } from '@cdktf/provider-opentelekomcloud'

dcVirtualInterfaceV3.DcVirtualInterfaceV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DcVirtualInterfaceV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DcVirtualInterfaceV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DcVirtualInterfaceV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DcVirtualInterfaceV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.deviceId">deviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vifPeers">vifPeers</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList">DcVirtualInterfaceV3VifPeersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.addressFamilyInput">addressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.asnInput">asnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bandwidthInput">bandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bgpMd5Input">bgpMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.directConnectIdInput">directConnectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableBfdInput">enableBfdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableNqaInput">enableNqaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.lagIdInput">lagIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV4IpInput">localGatewayV4IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV6IpInput">localGatewayV6IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteEpGroupInput">remoteEpGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV4IpInput">remoteGatewayV4IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV6IpInput">remoteGatewayV6IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.resourceTenantIdInput">resourceTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.routeModeInput">routeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.serviceEpGroupInput">serviceEpGroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vgwIdInput">vgwIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vlanInput">vlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bandwidth">bandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bgpMd5">bgpMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.directConnectId">directConnectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableBfd">enableBfd</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableNqa">enableNqa</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.lagId">lagId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV4Ip">localGatewayV4Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV6Ip">localGatewayV6Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteEpGroup">remoteEpGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV4Ip">remoteGatewayV4Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV6Ip">remoteGatewayV6Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.resourceTenantId">resourceTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.routeMode">routeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.serviceEpGroup">serviceEpGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vgwId">vgwId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `vifPeers`<sup>Required</sup> <a name="vifPeers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vifPeers"></a>

```typescript
public readonly vifPeers: DcVirtualInterfaceV3VifPeersList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList">DcVirtualInterfaceV3VifPeersList</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.addressFamilyInput"></a>

```typescript
public readonly addressFamilyInput: string;
```

- *Type:* string

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.asnInput"></a>

```typescript
public readonly asnInput: number;
```

- *Type:* number

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bandwidthInput"></a>

```typescript
public readonly bandwidthInput: number;
```

- *Type:* number

---

##### `bgpMd5Input`<sup>Optional</sup> <a name="bgpMd5Input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bgpMd5Input"></a>

```typescript
public readonly bgpMd5Input: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directConnectIdInput`<sup>Optional</sup> <a name="directConnectIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.directConnectIdInput"></a>

```typescript
public readonly directConnectIdInput: string;
```

- *Type:* string

---

##### `enableBfdInput`<sup>Optional</sup> <a name="enableBfdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableBfdInput"></a>

```typescript
public readonly enableBfdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableNqaInput`<sup>Optional</sup> <a name="enableNqaInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableNqaInput"></a>

```typescript
public readonly enableNqaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lagIdInput`<sup>Optional</sup> <a name="lagIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.lagIdInput"></a>

```typescript
public readonly lagIdInput: string;
```

- *Type:* string

---

##### `localGatewayV4IpInput`<sup>Optional</sup> <a name="localGatewayV4IpInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV4IpInput"></a>

```typescript
public readonly localGatewayV4IpInput: string;
```

- *Type:* string

---

##### `localGatewayV6IpInput`<sup>Optional</sup> <a name="localGatewayV6IpInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV6IpInput"></a>

```typescript
public readonly localGatewayV6IpInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `remoteEpGroupInput`<sup>Optional</sup> <a name="remoteEpGroupInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteEpGroupInput"></a>

```typescript
public readonly remoteEpGroupInput: string[];
```

- *Type:* string[]

---

##### `remoteGatewayV4IpInput`<sup>Optional</sup> <a name="remoteGatewayV4IpInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV4IpInput"></a>

```typescript
public readonly remoteGatewayV4IpInput: string;
```

- *Type:* string

---

##### `remoteGatewayV6IpInput`<sup>Optional</sup> <a name="remoteGatewayV6IpInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV6IpInput"></a>

```typescript
public readonly remoteGatewayV6IpInput: string;
```

- *Type:* string

---

##### `resourceTenantIdInput`<sup>Optional</sup> <a name="resourceTenantIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.resourceTenantIdInput"></a>

```typescript
public readonly resourceTenantIdInput: string;
```

- *Type:* string

---

##### `routeModeInput`<sup>Optional</sup> <a name="routeModeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.routeModeInput"></a>

```typescript
public readonly routeModeInput: string;
```

- *Type:* string

---

##### `serviceEpGroupInput`<sup>Optional</sup> <a name="serviceEpGroupInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.serviceEpGroupInput"></a>

```typescript
public readonly serviceEpGroupInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vgwIdInput`<sup>Optional</sup> <a name="vgwIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vgwIdInput"></a>

```typescript
public readonly vgwIdInput: string;
```

- *Type:* string

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vlanInput"></a>

```typescript
public readonly vlanInput: number;
```

- *Type:* number

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bandwidth"></a>

```typescript
public readonly bandwidth: number;
```

- *Type:* number

---

##### `bgpMd5`<sup>Required</sup> <a name="bgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.bgpMd5"></a>

```typescript
public readonly bgpMd5: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `directConnectId`<sup>Required</sup> <a name="directConnectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.directConnectId"></a>

```typescript
public readonly directConnectId: string;
```

- *Type:* string

---

##### `enableBfd`<sup>Required</sup> <a name="enableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableBfd"></a>

```typescript
public readonly enableBfd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableNqa`<sup>Required</sup> <a name="enableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.enableNqa"></a>

```typescript
public readonly enableNqa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lagId`<sup>Required</sup> <a name="lagId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.lagId"></a>

```typescript
public readonly lagId: string;
```

- *Type:* string

---

##### `localGatewayV4Ip`<sup>Required</sup> <a name="localGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV4Ip"></a>

```typescript
public readonly localGatewayV4Ip: string;
```

- *Type:* string

---

##### `localGatewayV6Ip`<sup>Required</sup> <a name="localGatewayV6Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.localGatewayV6Ip"></a>

```typescript
public readonly localGatewayV6Ip: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `remoteEpGroup`<sup>Required</sup> <a name="remoteEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteEpGroup"></a>

```typescript
public readonly remoteEpGroup: string[];
```

- *Type:* string[]

---

##### `remoteGatewayV4Ip`<sup>Required</sup> <a name="remoteGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV4Ip"></a>

```typescript
public readonly remoteGatewayV4Ip: string;
```

- *Type:* string

---

##### `remoteGatewayV6Ip`<sup>Required</sup> <a name="remoteGatewayV6Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.remoteGatewayV6Ip"></a>

```typescript
public readonly remoteGatewayV6Ip: string;
```

- *Type:* string

---

##### `resourceTenantId`<sup>Required</sup> <a name="resourceTenantId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.resourceTenantId"></a>

```typescript
public readonly resourceTenantId: string;
```

- *Type:* string

---

##### `routeMode`<sup>Required</sup> <a name="routeMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.routeMode"></a>

```typescript
public readonly routeMode: string;
```

- *Type:* string

---

##### `serviceEpGroup`<sup>Required</sup> <a name="serviceEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.serviceEpGroup"></a>

```typescript
public readonly serviceEpGroup: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vgwId`<sup>Required</sup> <a name="vgwId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vgwId"></a>

```typescript
public readonly vgwId: string;
```

- *Type:* string

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DcVirtualInterfaceV3Config <a name="DcVirtualInterfaceV3Config" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.Initializer"></a>

```typescript
import { dcVirtualInterfaceV3 } from '@cdktf/provider-opentelekomcloud'

const dcVirtualInterfaceV3Config: dcVirtualInterfaceV3.DcVirtualInterfaceV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.bandwidth">bandwidth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#bandwidth DcVirtualInterfaceV3#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.directConnectId">directConnectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#direct_connect_id DcVirtualInterfaceV3#direct_connect_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#name DcVirtualInterfaceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.remoteEpGroup">remoteEpGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_ep_group DcVirtualInterfaceV3#remote_ep_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.routeMode">routeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#route_mode DcVirtualInterfaceV3#route_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#type DcVirtualInterfaceV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.vgwId">vgwId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#vgw_id DcVirtualInterfaceV3#vgw_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.vlan">vlan</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#vlan DcVirtualInterfaceV3#vlan}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.addressFamily">addressFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#address_family DcVirtualInterfaceV3#address_family}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.asn">asn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#asn DcVirtualInterfaceV3#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.bgpMd5">bgpMd5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#bgp_md5 DcVirtualInterfaceV3#bgp_md5}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#description DcVirtualInterfaceV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.enableBfd">enableBfd</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#enable_bfd DcVirtualInterfaceV3#enable_bfd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.enableNqa">enableNqa</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#enable_nqa DcVirtualInterfaceV3#enable_nqa}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#id DcVirtualInterfaceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.lagId">lagId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#lag_id DcVirtualInterfaceV3#lag_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.localGatewayV4Ip">localGatewayV4Ip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#local_gateway_v4_ip DcVirtualInterfaceV3#local_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.localGatewayV6Ip">localGatewayV6Ip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#local_gateway_v6_ip DcVirtualInterfaceV3#local_gateway_v6_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.remoteGatewayV4Ip">remoteGatewayV4Ip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_gateway_v4_ip DcVirtualInterfaceV3#remote_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.remoteGatewayV6Ip">remoteGatewayV6Ip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_gateway_v6_ip DcVirtualInterfaceV3#remote_gateway_v6_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.resourceTenantId">resourceTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#resource_tenant_id DcVirtualInterfaceV3#resource_tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.serviceEpGroup">serviceEpGroup</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#service_ep_group DcVirtualInterfaceV3#service_ep_group}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.bandwidth"></a>

```typescript
public readonly bandwidth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#bandwidth DcVirtualInterfaceV3#bandwidth}.

---

##### `directConnectId`<sup>Required</sup> <a name="directConnectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.directConnectId"></a>

```typescript
public readonly directConnectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#direct_connect_id DcVirtualInterfaceV3#direct_connect_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#name DcVirtualInterfaceV3#name}.

---

##### `remoteEpGroup`<sup>Required</sup> <a name="remoteEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.remoteEpGroup"></a>

```typescript
public readonly remoteEpGroup: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_ep_group DcVirtualInterfaceV3#remote_ep_group}.

---

##### `routeMode`<sup>Required</sup> <a name="routeMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.routeMode"></a>

```typescript
public readonly routeMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#route_mode DcVirtualInterfaceV3#route_mode}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#type DcVirtualInterfaceV3#type}.

---

##### `vgwId`<sup>Required</sup> <a name="vgwId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.vgwId"></a>

```typescript
public readonly vgwId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#vgw_id DcVirtualInterfaceV3#vgw_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#vlan DcVirtualInterfaceV3#vlan}.

---

##### `addressFamily`<sup>Optional</sup> <a name="addressFamily" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#address_family DcVirtualInterfaceV3#address_family}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#asn DcVirtualInterfaceV3#asn}.

---

##### `bgpMd5`<sup>Optional</sup> <a name="bgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.bgpMd5"></a>

```typescript
public readonly bgpMd5: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#bgp_md5 DcVirtualInterfaceV3#bgp_md5}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#description DcVirtualInterfaceV3#description}.

---

##### `enableBfd`<sup>Optional</sup> <a name="enableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.enableBfd"></a>

```typescript
public readonly enableBfd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#enable_bfd DcVirtualInterfaceV3#enable_bfd}.

---

##### `enableNqa`<sup>Optional</sup> <a name="enableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.enableNqa"></a>

```typescript
public readonly enableNqa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#enable_nqa DcVirtualInterfaceV3#enable_nqa}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#id DcVirtualInterfaceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lagId`<sup>Optional</sup> <a name="lagId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.lagId"></a>

```typescript
public readonly lagId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#lag_id DcVirtualInterfaceV3#lag_id}.

---

##### `localGatewayV4Ip`<sup>Optional</sup> <a name="localGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.localGatewayV4Ip"></a>

```typescript
public readonly localGatewayV4Ip: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#local_gateway_v4_ip DcVirtualInterfaceV3#local_gateway_v4_ip}.

---

##### `localGatewayV6Ip`<sup>Optional</sup> <a name="localGatewayV6Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.localGatewayV6Ip"></a>

```typescript
public readonly localGatewayV6Ip: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#local_gateway_v6_ip DcVirtualInterfaceV3#local_gateway_v6_ip}.

---

##### `remoteGatewayV4Ip`<sup>Optional</sup> <a name="remoteGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.remoteGatewayV4Ip"></a>

```typescript
public readonly remoteGatewayV4Ip: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_gateway_v4_ip DcVirtualInterfaceV3#remote_gateway_v4_ip}.

---

##### `remoteGatewayV6Ip`<sup>Optional</sup> <a name="remoteGatewayV6Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.remoteGatewayV6Ip"></a>

```typescript
public readonly remoteGatewayV6Ip: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#remote_gateway_v6_ip DcVirtualInterfaceV3#remote_gateway_v6_ip}.

---

##### `resourceTenantId`<sup>Optional</sup> <a name="resourceTenantId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.resourceTenantId"></a>

```typescript
public readonly resourceTenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#resource_tenant_id DcVirtualInterfaceV3#resource_tenant_id}.

---

##### `serviceEpGroup`<sup>Optional</sup> <a name="serviceEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3Config.property.serviceEpGroup"></a>

```typescript
public readonly serviceEpGroup: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/dc_virtual_interface_v3#service_ep_group DcVirtualInterfaceV3#service_ep_group}.

---

### DcVirtualInterfaceV3VifPeers <a name="DcVirtualInterfaceV3VifPeers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeers.Initializer"></a>

```typescript
import { dcVirtualInterfaceV3 } from '@cdktf/provider-opentelekomcloud'

const dcVirtualInterfaceV3VifPeers: dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DcVirtualInterfaceV3VifPeersList <a name="DcVirtualInterfaceV3VifPeersList" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.Initializer"></a>

```typescript
import { dcVirtualInterfaceV3 } from '@cdktf/provider-opentelekomcloud'

new dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.get"></a>

```typescript
public get(index: number): DcVirtualInterfaceV3VifPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DcVirtualInterfaceV3VifPeersOutputReference <a name="DcVirtualInterfaceV3VifPeersOutputReference" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer"></a>

```typescript
import { dcVirtualInterfaceV3 } from '@cdktf/provider-opentelekomcloud'

new dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpAsn">bgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpMd5">bgpMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpRouteLimit">bgpRouteLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpStatus">bgpStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.deviceId">deviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.enableBfd">enableBfd</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.enableNqa">enableNqa</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.localGatewayIp">localGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.receiveRouteNum">receiveRouteNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.remoteEpGroup">remoteEpGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.remoteGatewayIp">remoteGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.routeMode">routeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.serviceEpGroup">serviceEpGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.vifId">vifId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeers">DcVirtualInterfaceV3VifPeers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpAsn"></a>

```typescript
public readonly bgpAsn: number;
```

- *Type:* number

---

##### `bgpMd5`<sup>Required</sup> <a name="bgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpMd5"></a>

```typescript
public readonly bgpMd5: string;
```

- *Type:* string

---

##### `bgpRouteLimit`<sup>Required</sup> <a name="bgpRouteLimit" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpRouteLimit"></a>

```typescript
public readonly bgpRouteLimit: number;
```

- *Type:* number

---

##### `bgpStatus`<sup>Required</sup> <a name="bgpStatus" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.bgpStatus"></a>

```typescript
public readonly bgpStatus: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

---

##### `enableBfd`<sup>Required</sup> <a name="enableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.enableBfd"></a>

```typescript
public readonly enableBfd: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableNqa`<sup>Required</sup> <a name="enableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.enableNqa"></a>

```typescript
public readonly enableNqa: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localGatewayIp`<sup>Required</sup> <a name="localGatewayIp" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.localGatewayIp"></a>

```typescript
public readonly localGatewayIp: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `receiveRouteNum`<sup>Required</sup> <a name="receiveRouteNum" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.receiveRouteNum"></a>

```typescript
public readonly receiveRouteNum: number;
```

- *Type:* number

---

##### `remoteEpGroup`<sup>Required</sup> <a name="remoteEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.remoteEpGroup"></a>

```typescript
public readonly remoteEpGroup: string[];
```

- *Type:* string[]

---

##### `remoteGatewayIp`<sup>Required</sup> <a name="remoteGatewayIp" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.remoteGatewayIp"></a>

```typescript
public readonly remoteGatewayIp: string;
```

- *Type:* string

---

##### `routeMode`<sup>Required</sup> <a name="routeMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.routeMode"></a>

```typescript
public readonly routeMode: string;
```

- *Type:* string

---

##### `serviceEpGroup`<sup>Required</sup> <a name="serviceEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.serviceEpGroup"></a>

```typescript
public readonly serviceEpGroup: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `vifId`<sup>Required</sup> <a name="vifId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.vifId"></a>

```typescript
public readonly vifId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DcVirtualInterfaceV3VifPeers;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV3.DcVirtualInterfaceV3VifPeers">DcVirtualInterfaceV3VifPeers</a>

---



