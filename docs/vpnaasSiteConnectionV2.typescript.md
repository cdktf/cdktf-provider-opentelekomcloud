# `vpnaasSiteConnectionV2` Submodule <a name="`vpnaasSiteConnectionV2` Submodule" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnaasSiteConnectionV2 <a name="VpnaasSiteConnectionV2" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2 opentelekomcloud_vpnaas_site_connection_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer"></a>

```typescript
import { vpnaasSiteConnectionV2 } from '@cdktf/provider-opentelekomcloud'

new vpnaasSiteConnectionV2.VpnaasSiteConnectionV2(scope: Construct, id: string, config: VpnaasSiteConnectionV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config">VpnaasSiteConnectionV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config">VpnaasSiteConnectionV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putDpd">putDpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDpd">resetDpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetInitiator">resetInitiator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalEpGroupId">resetLocalEpGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalId">resetLocalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerCidrs">resetPeerCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerEpGroupId">resetPeerEpGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetValueSpecs">resetValueSpecs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDpd` <a name="putDpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putDpd"></a>

```typescript
public putDpd(value: IResolvable | VpnaasSiteConnectionV2Dpd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putDpd.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putTimeouts"></a>

```typescript
public putTimeouts(value: VpnaasSiteConnectionV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetAdminStateUp"></a>

```typescript
public resetAdminStateUp(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDpd` <a name="resetDpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetDpd"></a>

```typescript
public resetDpd(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitiator` <a name="resetInitiator" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetInitiator"></a>

```typescript
public resetInitiator(): void
```

##### `resetLocalEpGroupId` <a name="resetLocalEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalEpGroupId"></a>

```typescript
public resetLocalEpGroupId(): void
```

##### `resetLocalId` <a name="resetLocalId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetLocalId"></a>

```typescript
public resetLocalId(): void
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPeerCidrs` <a name="resetPeerCidrs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerCidrs"></a>

```typescript
public resetPeerCidrs(): void
```

##### `resetPeerEpGroupId` <a name="resetPeerEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetPeerEpGroupId"></a>

```typescript
public resetPeerEpGroupId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValueSpecs` <a name="resetValueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.resetValueSpecs"></a>

```typescript
public resetValueSpecs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpnaasSiteConnectionV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isConstruct"></a>

```typescript
import { vpnaasSiteConnectionV2 } from '@cdktf/provider-opentelekomcloud'

vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformElement"></a>

```typescript
import { vpnaasSiteConnectionV2 } from '@cdktf/provider-opentelekomcloud'

vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformResource"></a>

```typescript
import { vpnaasSiteConnectionV2 } from '@cdktf/provider-opentelekomcloud'

vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.generateConfigForImport"></a>

```typescript
import { vpnaasSiteConnectionV2 } from '@cdktf/provider-opentelekomcloud'

vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpnaasSiteConnectionV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpnaasSiteConnectionV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpnaasSiteConnectionV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpnaasSiteConnectionV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpd">dpd</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList">VpnaasSiteConnectionV2DpdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference">VpnaasSiteConnectionV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUpInput">adminStateUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpdInput">dpdInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyIdInput">ikepolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiatorInput">initiatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyIdInput">ipsecpolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupIdInput">localEpGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localIdInput">localIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddressInput">peerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrsInput">peerCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupIdInput">peerEpGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerIdInput">peerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.pskInput">pskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecsInput">valueSpecsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceIdInput">vpnserviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyId">ikepolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiator">initiator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyId">ipsecpolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupId">localEpGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localId">localId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddress">peerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrs">peerCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupId">peerEpGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerId">peerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.psk">psk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceId">vpnserviceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dpd`<sup>Required</sup> <a name="dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpd"></a>

```typescript
public readonly dpd: VpnaasSiteConnectionV2DpdList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList">VpnaasSiteConnectionV2DpdList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeouts"></a>

```typescript
public readonly timeouts: VpnaasSiteConnectionV2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference">VpnaasSiteConnectionV2TimeoutsOutputReference</a>

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUpInput"></a>

```typescript
public readonly adminStateUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dpdInput`<sup>Optional</sup> <a name="dpdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.dpdInput"></a>

```typescript
public readonly dpdInput: IResolvable | VpnaasSiteConnectionV2Dpd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ikepolicyIdInput`<sup>Optional</sup> <a name="ikepolicyIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyIdInput"></a>

```typescript
public readonly ikepolicyIdInput: string;
```

- *Type:* string

---

##### `initiatorInput`<sup>Optional</sup> <a name="initiatorInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiatorInput"></a>

```typescript
public readonly initiatorInput: string;
```

- *Type:* string

---

##### `ipsecpolicyIdInput`<sup>Optional</sup> <a name="ipsecpolicyIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyIdInput"></a>

```typescript
public readonly ipsecpolicyIdInput: string;
```

- *Type:* string

---

##### `localEpGroupIdInput`<sup>Optional</sup> <a name="localEpGroupIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupIdInput"></a>

```typescript
public readonly localEpGroupIdInput: string;
```

- *Type:* string

---

##### `localIdInput`<sup>Optional</sup> <a name="localIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localIdInput"></a>

```typescript
public readonly localIdInput: string;
```

- *Type:* string

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `peerAddressInput`<sup>Optional</sup> <a name="peerAddressInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddressInput"></a>

```typescript
public readonly peerAddressInput: string;
```

- *Type:* string

---

##### `peerCidrsInput`<sup>Optional</sup> <a name="peerCidrsInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrsInput"></a>

```typescript
public readonly peerCidrsInput: string[];
```

- *Type:* string[]

---

##### `peerEpGroupIdInput`<sup>Optional</sup> <a name="peerEpGroupIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupIdInput"></a>

```typescript
public readonly peerEpGroupIdInput: string;
```

- *Type:* string

---

##### `peerIdInput`<sup>Optional</sup> <a name="peerIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerIdInput"></a>

```typescript
public readonly peerIdInput: string;
```

- *Type:* string

---

##### `pskInput`<sup>Optional</sup> <a name="pskInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.pskInput"></a>

```typescript
public readonly pskInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpnaasSiteConnectionV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>

---

##### `valueSpecsInput`<sup>Optional</sup> <a name="valueSpecsInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecsInput"></a>

```typescript
public readonly valueSpecsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpnserviceIdInput`<sup>Optional</sup> <a name="vpnserviceIdInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceIdInput"></a>

```typescript
public readonly vpnserviceIdInput: string;
```

- *Type:* string

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ikepolicyId`<sup>Required</sup> <a name="ikepolicyId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ikepolicyId"></a>

```typescript
public readonly ikepolicyId: string;
```

- *Type:* string

---

##### `initiator`<sup>Required</sup> <a name="initiator" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.initiator"></a>

```typescript
public readonly initiator: string;
```

- *Type:* string

---

##### `ipsecpolicyId`<sup>Required</sup> <a name="ipsecpolicyId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.ipsecpolicyId"></a>

```typescript
public readonly ipsecpolicyId: string;
```

- *Type:* string

---

##### `localEpGroupId`<sup>Required</sup> <a name="localEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localEpGroupId"></a>

```typescript
public readonly localEpGroupId: string;
```

- *Type:* string

---

##### `localId`<sup>Required</sup> <a name="localId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.localId"></a>

```typescript
public readonly localId: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

---

##### `peerCidrs`<sup>Required</sup> <a name="peerCidrs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerCidrs"></a>

```typescript
public readonly peerCidrs: string[];
```

- *Type:* string[]

---

##### `peerEpGroupId`<sup>Required</sup> <a name="peerEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerEpGroupId"></a>

```typescript
public readonly peerEpGroupId: string;
```

- *Type:* string

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.psk"></a>

```typescript
public readonly psk: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `valueSpecs`<sup>Required</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpnserviceId`<sup>Required</sup> <a name="vpnserviceId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.vpnserviceId"></a>

```typescript
public readonly vpnserviceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnaasSiteConnectionV2Config <a name="VpnaasSiteConnectionV2Config" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.Initializer"></a>

```typescript
import { vpnaasSiteConnectionV2 } from '@cdktf/provider-opentelekomcloud'

const vpnaasSiteConnectionV2Config: vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ikepolicyId">ikepolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#ikepolicy_id VpnaasSiteConnectionV2#ikepolicy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ipsecpolicyId">ipsecpolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#ipsecpolicy_id VpnaasSiteConnectionV2#ipsecpolicy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerAddress">peerAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#peer_address VpnaasSiteConnectionV2#peer_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerId">peerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#peer_id VpnaasSiteConnectionV2#peer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.psk">psk</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#psk VpnaasSiteConnectionV2#psk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.vpnserviceId">vpnserviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#vpnservice_id VpnaasSiteConnectionV2#vpnservice_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#admin_state_up VpnaasSiteConnectionV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#description VpnaasSiteConnectionV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dpd">dpd</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>[]</code> | dpd block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#id VpnaasSiteConnectionV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.initiator">initiator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#initiator VpnaasSiteConnectionV2#initiator}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localEpGroupId">localEpGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#local_ep_group_id VpnaasSiteConnectionV2#local_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localId">localId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#local_id VpnaasSiteConnectionV2#local_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.mtu">mtu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#mtu VpnaasSiteConnectionV2#mtu}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#name VpnaasSiteConnectionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerCidrs">peerCidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#peer_cidrs VpnaasSiteConnectionV2#peer_cidrs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerEpGroupId">peerEpGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#peer_ep_group_id VpnaasSiteConnectionV2#peer_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#region VpnaasSiteConnectionV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#tags VpnaasSiteConnectionV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#tenant_id VpnaasSiteConnectionV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#value_specs VpnaasSiteConnectionV2#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ikepolicyId`<sup>Required</sup> <a name="ikepolicyId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ikepolicyId"></a>

```typescript
public readonly ikepolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#ikepolicy_id VpnaasSiteConnectionV2#ikepolicy_id}.

---

##### `ipsecpolicyId`<sup>Required</sup> <a name="ipsecpolicyId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.ipsecpolicyId"></a>

```typescript
public readonly ipsecpolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#ipsecpolicy_id VpnaasSiteConnectionV2#ipsecpolicy_id}.

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#peer_address VpnaasSiteConnectionV2#peer_address}.

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#peer_id VpnaasSiteConnectionV2#peer_id}.

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.psk"></a>

```typescript
public readonly psk: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#psk VpnaasSiteConnectionV2#psk}.

---

##### `vpnserviceId`<sup>Required</sup> <a name="vpnserviceId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.vpnserviceId"></a>

```typescript
public readonly vpnserviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#vpnservice_id VpnaasSiteConnectionV2#vpnservice_id}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#admin_state_up VpnaasSiteConnectionV2#admin_state_up}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#description VpnaasSiteConnectionV2#description}.

---

##### `dpd`<sup>Optional</sup> <a name="dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.dpd"></a>

```typescript
public readonly dpd: IResolvable | VpnaasSiteConnectionV2Dpd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>[]

dpd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#dpd VpnaasSiteConnectionV2#dpd}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#id VpnaasSiteConnectionV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initiator`<sup>Optional</sup> <a name="initiator" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.initiator"></a>

```typescript
public readonly initiator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#initiator VpnaasSiteConnectionV2#initiator}.

---

##### `localEpGroupId`<sup>Optional</sup> <a name="localEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localEpGroupId"></a>

```typescript
public readonly localEpGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#local_ep_group_id VpnaasSiteConnectionV2#local_ep_group_id}.

---

##### `localId`<sup>Optional</sup> <a name="localId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.localId"></a>

```typescript
public readonly localId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#local_id VpnaasSiteConnectionV2#local_id}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#mtu VpnaasSiteConnectionV2#mtu}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#name VpnaasSiteConnectionV2#name}.

---

##### `peerCidrs`<sup>Optional</sup> <a name="peerCidrs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerCidrs"></a>

```typescript
public readonly peerCidrs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#peer_cidrs VpnaasSiteConnectionV2#peer_cidrs}.

---

##### `peerEpGroupId`<sup>Optional</sup> <a name="peerEpGroupId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.peerEpGroupId"></a>

```typescript
public readonly peerEpGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#peer_ep_group_id VpnaasSiteConnectionV2#peer_ep_group_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#region VpnaasSiteConnectionV2#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#tags VpnaasSiteConnectionV2#tags}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#tenant_id VpnaasSiteConnectionV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: VpnaasSiteConnectionV2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#timeouts VpnaasSiteConnectionV2#timeouts}

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Config.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#value_specs VpnaasSiteConnectionV2#value_specs}.

---

### VpnaasSiteConnectionV2Dpd <a name="VpnaasSiteConnectionV2Dpd" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.Initializer"></a>

```typescript
import { vpnaasSiteConnectionV2 } from '@cdktf/provider-opentelekomcloud'

const vpnaasSiteConnectionV2Dpd: vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#action VpnaasSiteConnectionV2#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#interval VpnaasSiteConnectionV2#interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#timeout VpnaasSiteConnectionV2#timeout}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#action VpnaasSiteConnectionV2#action}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#interval VpnaasSiteConnectionV2#interval}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#timeout VpnaasSiteConnectionV2#timeout}.

---

### VpnaasSiteConnectionV2Timeouts <a name="VpnaasSiteConnectionV2Timeouts" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.Initializer"></a>

```typescript
import { vpnaasSiteConnectionV2 } from '@cdktf/provider-opentelekomcloud'

const vpnaasSiteConnectionV2Timeouts: vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#create VpnaasSiteConnectionV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#delete VpnaasSiteConnectionV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#update VpnaasSiteConnectionV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#create VpnaasSiteConnectionV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#delete VpnaasSiteConnectionV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.23/docs/resources/vpnaas_site_connection_v2#update VpnaasSiteConnectionV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnaasSiteConnectionV2DpdList <a name="VpnaasSiteConnectionV2DpdList" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer"></a>

```typescript
import { vpnaasSiteConnectionV2 } from '@cdktf/provider-opentelekomcloud'

new vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.get"></a>

```typescript
public get(index: number): VpnaasSiteConnectionV2DpdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnaasSiteConnectionV2Dpd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>[]

---


### VpnaasSiteConnectionV2DpdOutputReference <a name="VpnaasSiteConnectionV2DpdOutputReference" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer"></a>

```typescript
import { vpnaasSiteConnectionV2 } from '@cdktf/provider-opentelekomcloud'

new vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2DpdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnaasSiteConnectionV2Dpd;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Dpd">VpnaasSiteConnectionV2Dpd</a>

---


### VpnaasSiteConnectionV2TimeoutsOutputReference <a name="VpnaasSiteConnectionV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { vpnaasSiteConnectionV2 } from '@cdktf/provider-opentelekomcloud'

new vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnaasSiteConnectionV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vpnaasSiteConnectionV2.VpnaasSiteConnectionV2Timeouts">VpnaasSiteConnectionV2Timeouts</a>

---



