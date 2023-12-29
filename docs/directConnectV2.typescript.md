# `directConnectV2` Submodule <a name="`directConnectV2` Submodule" id="@cdktf/provider-opentelekomcloud.directConnectV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectConnectV2 <a name="DirectConnectV2" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2 opentelekomcloud_direct_connect_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer"></a>

```typescript
import { directConnectV2 } from '@cdktf/provider-opentelekomcloud'

new directConnectV2.DirectConnectV2(scope: Construct, id: string, config: DirectConnectV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config">DirectConnectV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config">DirectConnectV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetChargeMode">resetChargeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDeviceId">resetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetHostingId">resetHostingId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetInterfaceName">resetInterfaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOrderId">resetOrderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPeerLocation">resetPeerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPortType">resetPortType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProductId">resetProductId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProviderStatus">resetProviderStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetRedundantId">resetRedundantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetVlan">resetVlan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.putTimeouts"></a>

```typescript
public putTimeouts(value: DirectConnectV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetAdminStateUp"></a>

```typescript
public resetAdminStateUp(): void
```

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetBandwidth"></a>

```typescript
public resetBandwidth(): void
```

##### `resetChargeMode` <a name="resetChargeMode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetChargeMode"></a>

```typescript
public resetChargeMode(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeviceId` <a name="resetDeviceId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetDeviceId"></a>

```typescript
public resetDeviceId(): void
```

##### `resetHostingId` <a name="resetHostingId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetHostingId"></a>

```typescript
public resetHostingId(): void
```

##### `resetInterfaceName` <a name="resetInterfaceName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetInterfaceName"></a>

```typescript
public resetInterfaceName(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOrderId` <a name="resetOrderId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetOrderId"></a>

```typescript
public resetOrderId(): void
```

##### `resetPeerLocation` <a name="resetPeerLocation" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPeerLocation"></a>

```typescript
public resetPeerLocation(): void
```

##### `resetPortType` <a name="resetPortType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetPortType"></a>

```typescript
public resetPortType(): void
```

##### `resetProductId` <a name="resetProductId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProductId"></a>

```typescript
public resetProductId(): void
```

##### `resetProviderStatus` <a name="resetProviderStatus" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetProviderStatus"></a>

```typescript
public resetProviderStatus(): void
```

##### `resetRedundantId` <a name="resetRedundantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetRedundantId"></a>

```typescript
public resetRedundantId(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVlan` <a name="resetVlan" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.resetVlan"></a>

```typescript
public resetVlan(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DirectConnectV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isConstruct"></a>

```typescript
import { directConnectV2 } from '@cdktf/provider-opentelekomcloud'

directConnectV2.DirectConnectV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformElement"></a>

```typescript
import { directConnectV2 } from '@cdktf/provider-opentelekomcloud'

directConnectV2.DirectConnectV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformResource"></a>

```typescript
import { directConnectV2 } from '@cdktf/provider-opentelekomcloud'

directConnectV2.DirectConnectV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport"></a>

```typescript
import { directConnectV2 } from '@cdktf/provider-opentelekomcloud'

directConnectV2.DirectConnectV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DirectConnectV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectConnectV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectConnectV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DirectConnectV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applicant">applicant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applyTime">applyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.buildingLineProductId">buildingLineProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cableLabel">cableLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lagId">lagId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lastOnestopProductId">lastOnestopProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.mobile">mobile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.onestopProductId">onestopProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerPortType">peerPortType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerProvider">peerProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodNum">periodNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodType">periodType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.regionId">regionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.serviceKey">serviceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.specCode">specCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference">DirectConnectV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vgwType">vgwType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUpInput">adminStateUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidthInput">bandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeModeInput">chargeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceIdInput">deviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingIdInput">hostingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceNameInput">interfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderIdInput">orderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocationInput">peerLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portTypeInput">portTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatusInput">providerStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantIdInput">redundantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlanInput">vlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidth">bandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeMode">chargeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceId">deviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingId">hostingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceName">interfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderId">orderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocation">peerLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portType">portType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatus">providerStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantId">redundantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicant`<sup>Required</sup> <a name="applicant" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applicant"></a>

```typescript
public readonly applicant: string;
```

- *Type:* string

---

##### `applyTime`<sup>Required</sup> <a name="applyTime" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.applyTime"></a>

```typescript
public readonly applyTime: string;
```

- *Type:* string

---

##### `buildingLineProductId`<sup>Required</sup> <a name="buildingLineProductId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.buildingLineProductId"></a>

```typescript
public readonly buildingLineProductId: string;
```

- *Type:* string

---

##### `cableLabel`<sup>Required</sup> <a name="cableLabel" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.cableLabel"></a>

```typescript
public readonly cableLabel: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lagId`<sup>Required</sup> <a name="lagId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lagId"></a>

```typescript
public readonly lagId: string;
```

- *Type:* string

---

##### `lastOnestopProductId`<sup>Required</sup> <a name="lastOnestopProductId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.lastOnestopProductId"></a>

```typescript
public readonly lastOnestopProductId: string;
```

- *Type:* string

---

##### `mobile`<sup>Required</sup> <a name="mobile" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.mobile"></a>

```typescript
public readonly mobile: string;
```

- *Type:* string

---

##### `onestopProductId`<sup>Required</sup> <a name="onestopProductId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.onestopProductId"></a>

```typescript
public readonly onestopProductId: string;
```

- *Type:* string

---

##### `peerPortType`<sup>Required</sup> <a name="peerPortType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerPortType"></a>

```typescript
public readonly peerPortType: string;
```

- *Type:* string

---

##### `peerProvider`<sup>Required</sup> <a name="peerProvider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerProvider"></a>

```typescript
public readonly peerProvider: string;
```

- *Type:* string

---

##### `periodNum`<sup>Required</sup> <a name="periodNum" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodNum"></a>

```typescript
public readonly periodNum: number;
```

- *Type:* number

---

##### `periodType`<sup>Required</sup> <a name="periodType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.periodType"></a>

```typescript
public readonly periodType: number;
```

- *Type:* number

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `regionId`<sup>Required</sup> <a name="regionId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.regionId"></a>

```typescript
public readonly regionId: string;
```

- *Type:* string

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

---

##### `specCode`<sup>Required</sup> <a name="specCode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.specCode"></a>

```typescript
public readonly specCode: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeouts"></a>

```typescript
public readonly timeouts: DirectConnectV2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference">DirectConnectV2TimeoutsOutputReference</a>

---

##### `vgwType`<sup>Required</sup> <a name="vgwType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vgwType"></a>

```typescript
public readonly vgwType: string;
```

- *Type:* string

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUpInput"></a>

```typescript
public readonly adminStateUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidthInput"></a>

```typescript
public readonly bandwidthInput: number;
```

- *Type:* number

---

##### `chargeModeInput`<sup>Optional</sup> <a name="chargeModeInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeModeInput"></a>

```typescript
public readonly chargeModeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deviceIdInput`<sup>Optional</sup> <a name="deviceIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceIdInput"></a>

```typescript
public readonly deviceIdInput: string;
```

- *Type:* string

---

##### `hostingIdInput`<sup>Optional</sup> <a name="hostingIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingIdInput"></a>

```typescript
public readonly hostingIdInput: string;
```

- *Type:* string

---

##### `interfaceNameInput`<sup>Optional</sup> <a name="interfaceNameInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceNameInput"></a>

```typescript
public readonly interfaceNameInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orderIdInput`<sup>Optional</sup> <a name="orderIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderIdInput"></a>

```typescript
public readonly orderIdInput: string;
```

- *Type:* string

---

##### `peerLocationInput`<sup>Optional</sup> <a name="peerLocationInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocationInput"></a>

```typescript
public readonly peerLocationInput: string;
```

- *Type:* string

---

##### `portTypeInput`<sup>Optional</sup> <a name="portTypeInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portTypeInput"></a>

```typescript
public readonly portTypeInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `providerStatusInput`<sup>Optional</sup> <a name="providerStatusInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatusInput"></a>

```typescript
public readonly providerStatusInput: string;
```

- *Type:* string

---

##### `redundantIdInput`<sup>Optional</sup> <a name="redundantIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantIdInput"></a>

```typescript
public readonly redundantIdInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DirectConnectV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlanInput"></a>

```typescript
public readonly vlanInput: number;
```

- *Type:* number

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.bandwidth"></a>

```typescript
public readonly bandwidth: number;
```

- *Type:* number

---

##### `chargeMode`<sup>Required</sup> <a name="chargeMode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.chargeMode"></a>

```typescript
public readonly chargeMode: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

---

##### `hostingId`<sup>Required</sup> <a name="hostingId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.hostingId"></a>

```typescript
public readonly hostingId: string;
```

- *Type:* string

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.orderId"></a>

```typescript
public readonly orderId: string;
```

- *Type:* string

---

##### `peerLocation`<sup>Required</sup> <a name="peerLocation" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.peerLocation"></a>

```typescript
public readonly peerLocation: string;
```

- *Type:* string

---

##### `portType`<sup>Required</sup> <a name="portType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.portType"></a>

```typescript
public readonly portType: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `providerStatus`<sup>Required</sup> <a name="providerStatus" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.providerStatus"></a>

```typescript
public readonly providerStatus: string;
```

- *Type:* string

---

##### `redundantId`<sup>Required</sup> <a name="redundantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.redundantId"></a>

```typescript
public readonly redundantId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectConnectV2Config <a name="DirectConnectV2Config" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.Initializer"></a>

```typescript
import { directConnectV2 } from '@cdktf/provider-opentelekomcloud'

const directConnectV2Config: directConnectV2.DirectConnectV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#provider_name DirectConnectV2#provider_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#admin_state_up DirectConnectV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.bandwidth">bandwidth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#bandwidth DirectConnectV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.chargeMode">chargeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#charge_mode DirectConnectV2#charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#description DirectConnectV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.deviceId">deviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#device_id DirectConnectV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.hostingId">hostingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#hosting_id DirectConnectV2#hosting_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.interfaceName">interfaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#interface_name DirectConnectV2#interface_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#location DirectConnectV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#name DirectConnectV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.orderId">orderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#order_id DirectConnectV2#order_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.peerLocation">peerLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#peer_location DirectConnectV2#peer_location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.portType">portType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#port_type DirectConnectV2#port_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.productId">productId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#product_id DirectConnectV2#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerStatus">providerStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#provider_status DirectConnectV2#provider_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.redundantId">redundantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#redundant_id DirectConnectV2#redundant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#status DirectConnectV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#tenant_id DirectConnectV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#type DirectConnectV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.vlan">vlan</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#vlan DirectConnectV2#vlan}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#provider_name DirectConnectV2#provider_name}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#admin_state_up DirectConnectV2#admin_state_up}.

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.bandwidth"></a>

```typescript
public readonly bandwidth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#bandwidth DirectConnectV2#bandwidth}.

---

##### `chargeMode`<sup>Optional</sup> <a name="chargeMode" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.chargeMode"></a>

```typescript
public readonly chargeMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#charge_mode DirectConnectV2#charge_mode}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#description DirectConnectV2#description}.

---

##### `deviceId`<sup>Optional</sup> <a name="deviceId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#device_id DirectConnectV2#device_id}.

---

##### `hostingId`<sup>Optional</sup> <a name="hostingId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.hostingId"></a>

```typescript
public readonly hostingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#hosting_id DirectConnectV2#hosting_id}.

---

##### `interfaceName`<sup>Optional</sup> <a name="interfaceName" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#interface_name DirectConnectV2#interface_name}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#location DirectConnectV2#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#name DirectConnectV2#name}.

---

##### `orderId`<sup>Optional</sup> <a name="orderId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.orderId"></a>

```typescript
public readonly orderId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#order_id DirectConnectV2#order_id}.

---

##### `peerLocation`<sup>Optional</sup> <a name="peerLocation" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.peerLocation"></a>

```typescript
public readonly peerLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#peer_location DirectConnectV2#peer_location}.

---

##### `portType`<sup>Optional</sup> <a name="portType" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.portType"></a>

```typescript
public readonly portType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#port_type DirectConnectV2#port_type}.

---

##### `productId`<sup>Optional</sup> <a name="productId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#product_id DirectConnectV2#product_id}.

---

##### `providerStatus`<sup>Optional</sup> <a name="providerStatus" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.providerStatus"></a>

```typescript
public readonly providerStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#provider_status DirectConnectV2#provider_status}.

---

##### `redundantId`<sup>Optional</sup> <a name="redundantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.redundantId"></a>

```typescript
public readonly redundantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#redundant_id DirectConnectV2#redundant_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#status DirectConnectV2#status}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#tenant_id DirectConnectV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: DirectConnectV2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#timeouts DirectConnectV2#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#type DirectConnectV2#type}.

---

##### `vlan`<sup>Optional</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Config.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#vlan DirectConnectV2#vlan}.

---

### DirectConnectV2Timeouts <a name="DirectConnectV2Timeouts" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.Initializer"></a>

```typescript
import { directConnectV2 } from '@cdktf/provider-opentelekomcloud'

const directConnectV2Timeouts: directConnectV2.DirectConnectV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#create DirectConnectV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#delete DirectConnectV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#update DirectConnectV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#create DirectConnectV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#delete DirectConnectV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.15/docs/resources/direct_connect_v2#update DirectConnectV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectConnectV2TimeoutsOutputReference <a name="DirectConnectV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { directConnectV2 } from '@cdktf/provider-opentelekomcloud'

new directConnectV2.DirectConnectV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectConnectV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.directConnectV2.DirectConnectV2Timeouts">DirectConnectV2Timeouts</a>

---



