# `enterpriseVpnConnectionV5` Submodule <a name="`enterpriseVpnConnectionV5` Submodule" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseVpnConnectionV5 <a name="EnterpriseVpnConnectionV5" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5 opentelekomcloud_enterprise_vpn_connection_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

new enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5(scope: Construct, id: string, config: EnterpriseVpnConnectionV5Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config">EnterpriseVpnConnectionV5Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config">EnterpriseVpnConnectionV5Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy">putIkepolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIpsecpolicy">putIpsecpolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putPolicyRules">putPolicyRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetEnableNqa">resetEnableNqa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetHaRole">resetHaRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetIkepolicy">resetIkepolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetIpsecpolicy">resetIpsecpolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetPeerSubnets">resetPeerSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetPolicyRules">resetPolicyRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTunnelLocalAddress">resetTunnelLocalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTunnelPeerAddress">resetTunnelPeerAddress</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIkepolicy` <a name="putIkepolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy"></a>

```typescript
public putIkepolicy(value: EnterpriseVpnConnectionV5Ikepolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIkepolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a>

---

##### `putIpsecpolicy` <a name="putIpsecpolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIpsecpolicy"></a>

```typescript
public putIpsecpolicy(value: EnterpriseVpnConnectionV5Ipsecpolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putIpsecpolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a>

---

##### `putPolicyRules` <a name="putPolicyRules" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putPolicyRules"></a>

```typescript
public putPolicyRules(value: IResolvable | EnterpriseVpnConnectionV5PolicyRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putPolicyRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putTimeouts"></a>

```typescript
public putTimeouts(value: EnterpriseVpnConnectionV5Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a>

---

##### `resetEnableNqa` <a name="resetEnableNqa" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetEnableNqa"></a>

```typescript
public resetEnableNqa(): void
```

##### `resetHaRole` <a name="resetHaRole" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetHaRole"></a>

```typescript
public resetHaRole(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIkepolicy` <a name="resetIkepolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetIkepolicy"></a>

```typescript
public resetIkepolicy(): void
```

##### `resetIpsecpolicy` <a name="resetIpsecpolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetIpsecpolicy"></a>

```typescript
public resetIpsecpolicy(): void
```

##### `resetPeerSubnets` <a name="resetPeerSubnets" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetPeerSubnets"></a>

```typescript
public resetPeerSubnets(): void
```

##### `resetPolicyRules` <a name="resetPolicyRules" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetPolicyRules"></a>

```typescript
public resetPolicyRules(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTunnelLocalAddress` <a name="resetTunnelLocalAddress" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTunnelLocalAddress"></a>

```typescript
public resetTunnelLocalAddress(): void
```

##### `resetTunnelPeerAddress` <a name="resetTunnelPeerAddress" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.resetTunnelPeerAddress"></a>

```typescript
public resetTunnelPeerAddress(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseVpnConnectionV5 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isConstruct"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isTerraformElement"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isTerraformResource"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.generateConfigForImport"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EnterpriseVpnConnectionV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnterpriseVpnConnectionV5 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnterpriseVpnConnectionV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseVpnConnectionV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ikepolicy">ikepolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference">EnterpriseVpnConnectionV5IkepolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ipsecpolicy">ipsecpolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference">EnterpriseVpnConnectionV5IpsecpolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.policyRules">policyRules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList">EnterpriseVpnConnectionV5PolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference">EnterpriseVpnConnectionV5TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.customerGatewayIdInput">customerGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.enableNqaInput">enableNqaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayIpInput">gatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.haRoleInput">haRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ikepolicyInput">ikepolicyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ipsecpolicyInput">ipsecpolicyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.peerSubnetsInput">peerSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.policyRulesInput">policyRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.pskInput">pskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelLocalAddressInput">tunnelLocalAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelPeerAddressInput">tunnelPeerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.vpnTypeInput">vpnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.customerGatewayId">customerGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.enableNqa">enableNqa</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.haRole">haRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.peerSubnets">peerSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.psk">psk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelLocalAddress">tunnelLocalAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelPeerAddress">tunnelPeerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.vpnType">vpnType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `ikepolicy`<sup>Required</sup> <a name="ikepolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ikepolicy"></a>

```typescript
public readonly ikepolicy: EnterpriseVpnConnectionV5IkepolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference">EnterpriseVpnConnectionV5IkepolicyOutputReference</a>

---

##### `ipsecpolicy`<sup>Required</sup> <a name="ipsecpolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ipsecpolicy"></a>

```typescript
public readonly ipsecpolicy: EnterpriseVpnConnectionV5IpsecpolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference">EnterpriseVpnConnectionV5IpsecpolicyOutputReference</a>

---

##### `policyRules`<sup>Required</sup> <a name="policyRules" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.policyRules"></a>

```typescript
public readonly policyRules: EnterpriseVpnConnectionV5PolicyRulesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList">EnterpriseVpnConnectionV5PolicyRulesList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.timeouts"></a>

```typescript
public readonly timeouts: EnterpriseVpnConnectionV5TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference">EnterpriseVpnConnectionV5TimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `customerGatewayIdInput`<sup>Optional</sup> <a name="customerGatewayIdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.customerGatewayIdInput"></a>

```typescript
public readonly customerGatewayIdInput: string;
```

- *Type:* string

---

##### `enableNqaInput`<sup>Optional</sup> <a name="enableNqaInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.enableNqaInput"></a>

```typescript
public readonly enableNqaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `gatewayIpInput`<sup>Optional</sup> <a name="gatewayIpInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayIpInput"></a>

```typescript
public readonly gatewayIpInput: string;
```

- *Type:* string

---

##### `haRoleInput`<sup>Optional</sup> <a name="haRoleInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.haRoleInput"></a>

```typescript
public readonly haRoleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ikepolicyInput`<sup>Optional</sup> <a name="ikepolicyInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ikepolicyInput"></a>

```typescript
public readonly ikepolicyInput: EnterpriseVpnConnectionV5Ikepolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a>

---

##### `ipsecpolicyInput`<sup>Optional</sup> <a name="ipsecpolicyInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.ipsecpolicyInput"></a>

```typescript
public readonly ipsecpolicyInput: EnterpriseVpnConnectionV5Ipsecpolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `peerSubnetsInput`<sup>Optional</sup> <a name="peerSubnetsInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.peerSubnetsInput"></a>

```typescript
public readonly peerSubnetsInput: string[];
```

- *Type:* string[]

---

##### `policyRulesInput`<sup>Optional</sup> <a name="policyRulesInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.policyRulesInput"></a>

```typescript
public readonly policyRulesInput: IResolvable | EnterpriseVpnConnectionV5PolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>[]

---

##### `pskInput`<sup>Optional</sup> <a name="pskInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.pskInput"></a>

```typescript
public readonly pskInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EnterpriseVpnConnectionV5Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a>

---

##### `tunnelLocalAddressInput`<sup>Optional</sup> <a name="tunnelLocalAddressInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelLocalAddressInput"></a>

```typescript
public readonly tunnelLocalAddressInput: string;
```

- *Type:* string

---

##### `tunnelPeerAddressInput`<sup>Optional</sup> <a name="tunnelPeerAddressInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelPeerAddressInput"></a>

```typescript
public readonly tunnelPeerAddressInput: string;
```

- *Type:* string

---

##### `vpnTypeInput`<sup>Optional</sup> <a name="vpnTypeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.vpnTypeInput"></a>

```typescript
public readonly vpnTypeInput: string;
```

- *Type:* string

---

##### `customerGatewayId`<sup>Required</sup> <a name="customerGatewayId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.customerGatewayId"></a>

```typescript
public readonly customerGatewayId: string;
```

- *Type:* string

---

##### `enableNqa`<sup>Required</sup> <a name="enableNqa" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.enableNqa"></a>

```typescript
public readonly enableNqa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

---

##### `haRole`<sup>Required</sup> <a name="haRole" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.haRole"></a>

```typescript
public readonly haRole: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peerSubnets`<sup>Required</sup> <a name="peerSubnets" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.peerSubnets"></a>

```typescript
public readonly peerSubnets: string[];
```

- *Type:* string[]

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.psk"></a>

```typescript
public readonly psk: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tunnelLocalAddress`<sup>Required</sup> <a name="tunnelLocalAddress" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelLocalAddress"></a>

```typescript
public readonly tunnelLocalAddress: string;
```

- *Type:* string

---

##### `tunnelPeerAddress`<sup>Required</sup> <a name="tunnelPeerAddress" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tunnelPeerAddress"></a>

```typescript
public readonly tunnelPeerAddress: string;
```

- *Type:* string

---

##### `vpnType`<sup>Required</sup> <a name="vpnType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.vpnType"></a>

```typescript
public readonly vpnType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseVpnConnectionV5Config <a name="EnterpriseVpnConnectionV5Config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.Initializer"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

const enterpriseVpnConnectionV5Config: enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.customerGatewayId">customerGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#customer_gateway_id EnterpriseVpnConnectionV5#customer_gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.gatewayId">gatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#gateway_id EnterpriseVpnConnectionV5#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#gateway_ip EnterpriseVpnConnectionV5#gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#name EnterpriseVpnConnectionV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.psk">psk</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#psk EnterpriseVpnConnectionV5#psk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.vpnType">vpnType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#vpn_type EnterpriseVpnConnectionV5#vpn_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.enableNqa">enableNqa</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#enable_nqa EnterpriseVpnConnectionV5#enable_nqa}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.haRole">haRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#ha_role EnterpriseVpnConnectionV5#ha_role}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#id EnterpriseVpnConnectionV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.ikepolicy">ikepolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a></code> | ikepolicy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.ipsecpolicy">ipsecpolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a></code> | ipsecpolicy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.peerSubnets">peerSubnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#peer_subnets EnterpriseVpnConnectionV5#peer_subnets}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.policyRules">policyRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>[]</code> | policy_rules block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#tags EnterpriseVpnConnectionV5#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.tunnelLocalAddress">tunnelLocalAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#tunnel_local_address EnterpriseVpnConnectionV5#tunnel_local_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.tunnelPeerAddress">tunnelPeerAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#tunnel_peer_address EnterpriseVpnConnectionV5#tunnel_peer_address}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customerGatewayId`<sup>Required</sup> <a name="customerGatewayId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.customerGatewayId"></a>

```typescript
public readonly customerGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#customer_gateway_id EnterpriseVpnConnectionV5#customer_gateway_id}.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#gateway_id EnterpriseVpnConnectionV5#gateway_id}.

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#gateway_ip EnterpriseVpnConnectionV5#gateway_ip}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#name EnterpriseVpnConnectionV5#name}.

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.psk"></a>

```typescript
public readonly psk: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#psk EnterpriseVpnConnectionV5#psk}.

---

##### `vpnType`<sup>Required</sup> <a name="vpnType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.vpnType"></a>

```typescript
public readonly vpnType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#vpn_type EnterpriseVpnConnectionV5#vpn_type}.

---

##### `enableNqa`<sup>Optional</sup> <a name="enableNqa" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.enableNqa"></a>

```typescript
public readonly enableNqa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#enable_nqa EnterpriseVpnConnectionV5#enable_nqa}.

---

##### `haRole`<sup>Optional</sup> <a name="haRole" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.haRole"></a>

```typescript
public readonly haRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#ha_role EnterpriseVpnConnectionV5#ha_role}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#id EnterpriseVpnConnectionV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikepolicy`<sup>Optional</sup> <a name="ikepolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.ikepolicy"></a>

```typescript
public readonly ikepolicy: EnterpriseVpnConnectionV5Ikepolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a>

ikepolicy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#ikepolicy EnterpriseVpnConnectionV5#ikepolicy}

---

##### `ipsecpolicy`<sup>Optional</sup> <a name="ipsecpolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.ipsecpolicy"></a>

```typescript
public readonly ipsecpolicy: EnterpriseVpnConnectionV5Ipsecpolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a>

ipsecpolicy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#ipsecpolicy EnterpriseVpnConnectionV5#ipsecpolicy}

---

##### `peerSubnets`<sup>Optional</sup> <a name="peerSubnets" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.peerSubnets"></a>

```typescript
public readonly peerSubnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#peer_subnets EnterpriseVpnConnectionV5#peer_subnets}.

---

##### `policyRules`<sup>Optional</sup> <a name="policyRules" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.policyRules"></a>

```typescript
public readonly policyRules: IResolvable | EnterpriseVpnConnectionV5PolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>[]

policy_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#policy_rules EnterpriseVpnConnectionV5#policy_rules}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#tags EnterpriseVpnConnectionV5#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.timeouts"></a>

```typescript
public readonly timeouts: EnterpriseVpnConnectionV5Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#timeouts EnterpriseVpnConnectionV5#timeouts}

---

##### `tunnelLocalAddress`<sup>Optional</sup> <a name="tunnelLocalAddress" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.tunnelLocalAddress"></a>

```typescript
public readonly tunnelLocalAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#tunnel_local_address EnterpriseVpnConnectionV5#tunnel_local_address}.

---

##### `tunnelPeerAddress`<sup>Optional</sup> <a name="tunnelPeerAddress" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Config.property.tunnelPeerAddress"></a>

```typescript
public readonly tunnelPeerAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#tunnel_peer_address EnterpriseVpnConnectionV5#tunnel_peer_address}.

---

### EnterpriseVpnConnectionV5Ikepolicy <a name="EnterpriseVpnConnectionV5Ikepolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.Initializer"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

const enterpriseVpnConnectionV5Ikepolicy: enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.authenticationAlgorithm">authenticationAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#authentication_algorithm EnterpriseVpnConnectionV5#authentication_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.authenticationMethod">authenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#authentication_method EnterpriseVpnConnectionV5#authentication_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.dhGroup">dhGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#dh_group EnterpriseVpnConnectionV5#dh_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.dpd">dpd</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd">EnterpriseVpnConnectionV5IkepolicyDpd</a></code> | dpd block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#encryption_algorithm EnterpriseVpnConnectionV5#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.ikeVersion">ikeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#ike_version EnterpriseVpnConnectionV5#ike_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.lifetimeSeconds">lifetimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#lifetime_seconds EnterpriseVpnConnectionV5#lifetime_seconds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.localId">localId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#local_id EnterpriseVpnConnectionV5#local_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.localIdType">localIdType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#local_id_type EnterpriseVpnConnectionV5#local_id_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.peerId">peerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#peer_id EnterpriseVpnConnectionV5#peer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.peerIdType">peerIdType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#peer_id_type EnterpriseVpnConnectionV5#peer_id_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.phaseOneNegotiationMode">phaseOneNegotiationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#phase_one_negotiation_mode EnterpriseVpnConnectionV5#phase_one_negotiation_mode}. |

---

##### `authenticationAlgorithm`<sup>Optional</sup> <a name="authenticationAlgorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.authenticationAlgorithm"></a>

```typescript
public readonly authenticationAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#authentication_algorithm EnterpriseVpnConnectionV5#authentication_algorithm}.

---

##### `authenticationMethod`<sup>Optional</sup> <a name="authenticationMethod" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.authenticationMethod"></a>

```typescript
public readonly authenticationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#authentication_method EnterpriseVpnConnectionV5#authentication_method}.

---

##### `dhGroup`<sup>Optional</sup> <a name="dhGroup" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.dhGroup"></a>

```typescript
public readonly dhGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#dh_group EnterpriseVpnConnectionV5#dh_group}.

---

##### `dpd`<sup>Optional</sup> <a name="dpd" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.dpd"></a>

```typescript
public readonly dpd: EnterpriseVpnConnectionV5IkepolicyDpd;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd">EnterpriseVpnConnectionV5IkepolicyDpd</a>

dpd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#dpd EnterpriseVpnConnectionV5#dpd}

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#encryption_algorithm EnterpriseVpnConnectionV5#encryption_algorithm}.

---

##### `ikeVersion`<sup>Optional</sup> <a name="ikeVersion" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.ikeVersion"></a>

```typescript
public readonly ikeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#ike_version EnterpriseVpnConnectionV5#ike_version}.

---

##### `lifetimeSeconds`<sup>Optional</sup> <a name="lifetimeSeconds" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.lifetimeSeconds"></a>

```typescript
public readonly lifetimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#lifetime_seconds EnterpriseVpnConnectionV5#lifetime_seconds}.

---

##### `localId`<sup>Optional</sup> <a name="localId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.localId"></a>

```typescript
public readonly localId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#local_id EnterpriseVpnConnectionV5#local_id}.

---

##### `localIdType`<sup>Optional</sup> <a name="localIdType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.localIdType"></a>

```typescript
public readonly localIdType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#local_id_type EnterpriseVpnConnectionV5#local_id_type}.

---

##### `peerId`<sup>Optional</sup> <a name="peerId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#peer_id EnterpriseVpnConnectionV5#peer_id}.

---

##### `peerIdType`<sup>Optional</sup> <a name="peerIdType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.peerIdType"></a>

```typescript
public readonly peerIdType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#peer_id_type EnterpriseVpnConnectionV5#peer_id_type}.

---

##### `phaseOneNegotiationMode`<sup>Optional</sup> <a name="phaseOneNegotiationMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy.property.phaseOneNegotiationMode"></a>

```typescript
public readonly phaseOneNegotiationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#phase_one_negotiation_mode EnterpriseVpnConnectionV5#phase_one_negotiation_mode}.

---

### EnterpriseVpnConnectionV5IkepolicyDpd <a name="EnterpriseVpnConnectionV5IkepolicyDpd" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd.Initializer"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

const enterpriseVpnConnectionV5IkepolicyDpd: enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#interval EnterpriseVpnConnectionV5#interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd.property.msg">msg</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#msg EnterpriseVpnConnectionV5#msg}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#timeout EnterpriseVpnConnectionV5#timeout}. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#interval EnterpriseVpnConnectionV5#interval}.

---

##### `msg`<sup>Optional</sup> <a name="msg" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd.property.msg"></a>

```typescript
public readonly msg: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#msg EnterpriseVpnConnectionV5#msg}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#timeout EnterpriseVpnConnectionV5#timeout}.

---

### EnterpriseVpnConnectionV5Ipsecpolicy <a name="EnterpriseVpnConnectionV5Ipsecpolicy" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.Initializer"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

const enterpriseVpnConnectionV5Ipsecpolicy: enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.authenticationAlgorithm">authenticationAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#authentication_algorithm EnterpriseVpnConnectionV5#authentication_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.encapsulationMode">encapsulationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#encapsulation_mode EnterpriseVpnConnectionV5#encapsulation_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#encryption_algorithm EnterpriseVpnConnectionV5#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.lifetimeSeconds">lifetimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#lifetime_seconds EnterpriseVpnConnectionV5#lifetime_seconds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.pfs">pfs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#pfs EnterpriseVpnConnectionV5#pfs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.transformProtocol">transformProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#transform_protocol EnterpriseVpnConnectionV5#transform_protocol}. |

---

##### `authenticationAlgorithm`<sup>Optional</sup> <a name="authenticationAlgorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.authenticationAlgorithm"></a>

```typescript
public readonly authenticationAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#authentication_algorithm EnterpriseVpnConnectionV5#authentication_algorithm}.

---

##### `encapsulationMode`<sup>Optional</sup> <a name="encapsulationMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.encapsulationMode"></a>

```typescript
public readonly encapsulationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#encapsulation_mode EnterpriseVpnConnectionV5#encapsulation_mode}.

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#encryption_algorithm EnterpriseVpnConnectionV5#encryption_algorithm}.

---

##### `lifetimeSeconds`<sup>Optional</sup> <a name="lifetimeSeconds" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.lifetimeSeconds"></a>

```typescript
public readonly lifetimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#lifetime_seconds EnterpriseVpnConnectionV5#lifetime_seconds}.

---

##### `pfs`<sup>Optional</sup> <a name="pfs" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.pfs"></a>

```typescript
public readonly pfs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#pfs EnterpriseVpnConnectionV5#pfs}.

---

##### `transformProtocol`<sup>Optional</sup> <a name="transformProtocol" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy.property.transformProtocol"></a>

```typescript
public readonly transformProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#transform_protocol EnterpriseVpnConnectionV5#transform_protocol}.

---

### EnterpriseVpnConnectionV5PolicyRules <a name="EnterpriseVpnConnectionV5PolicyRules" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules.Initializer"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

const enterpriseVpnConnectionV5PolicyRules: enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules.property.destination">destination</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#destination EnterpriseVpnConnectionV5#destination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#source EnterpriseVpnConnectionV5#source}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules.property.destination"></a>

```typescript
public readonly destination: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#destination EnterpriseVpnConnectionV5#destination}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#source EnterpriseVpnConnectionV5#source}.

---

### EnterpriseVpnConnectionV5Timeouts <a name="EnterpriseVpnConnectionV5Timeouts" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts.Initializer"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

const enterpriseVpnConnectionV5Timeouts: enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#create EnterpriseVpnConnectionV5#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#delete EnterpriseVpnConnectionV5#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#update EnterpriseVpnConnectionV5#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#create EnterpriseVpnConnectionV5#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#delete EnterpriseVpnConnectionV5#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/enterprise_vpn_connection_v5#update EnterpriseVpnConnectionV5#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EnterpriseVpnConnectionV5IkepolicyDpdOutputReference <a name="EnterpriseVpnConnectionV5IkepolicyDpdOutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.Initializer"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

new enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resetMsg">resetMsg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetMsg` <a name="resetMsg" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resetMsg"></a>

```typescript
public resetMsg(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.msgInput">msgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.msg">msg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd">EnterpriseVpnConnectionV5IkepolicyDpd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `msgInput`<sup>Optional</sup> <a name="msgInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.msgInput"></a>

```typescript
public readonly msgInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `msg`<sup>Required</sup> <a name="msg" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.msg"></a>

```typescript
public readonly msg: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EnterpriseVpnConnectionV5IkepolicyDpd;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd">EnterpriseVpnConnectionV5IkepolicyDpd</a>

---


### EnterpriseVpnConnectionV5IkepolicyOutputReference <a name="EnterpriseVpnConnectionV5IkepolicyOutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.Initializer"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

new enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.putDpd">putDpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetAuthenticationAlgorithm">resetAuthenticationAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetAuthenticationMethod">resetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetDhGroup">resetDhGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetDpd">resetDpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetIkeVersion">resetIkeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetLifetimeSeconds">resetLifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetLocalId">resetLocalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetLocalIdType">resetLocalIdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetPeerId">resetPeerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetPeerIdType">resetPeerIdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetPhaseOneNegotiationMode">resetPhaseOneNegotiationMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDpd` <a name="putDpd" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.putDpd"></a>

```typescript
public putDpd(value: EnterpriseVpnConnectionV5IkepolicyDpd): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.putDpd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd">EnterpriseVpnConnectionV5IkepolicyDpd</a>

---

##### `resetAuthenticationAlgorithm` <a name="resetAuthenticationAlgorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetAuthenticationAlgorithm"></a>

```typescript
public resetAuthenticationAlgorithm(): void
```

##### `resetAuthenticationMethod` <a name="resetAuthenticationMethod" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetAuthenticationMethod"></a>

```typescript
public resetAuthenticationMethod(): void
```

##### `resetDhGroup` <a name="resetDhGroup" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetDhGroup"></a>

```typescript
public resetDhGroup(): void
```

##### `resetDpd` <a name="resetDpd" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetDpd"></a>

```typescript
public resetDpd(): void
```

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetEncryptionAlgorithm"></a>

```typescript
public resetEncryptionAlgorithm(): void
```

##### `resetIkeVersion` <a name="resetIkeVersion" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetIkeVersion"></a>

```typescript
public resetIkeVersion(): void
```

##### `resetLifetimeSeconds` <a name="resetLifetimeSeconds" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetLifetimeSeconds"></a>

```typescript
public resetLifetimeSeconds(): void
```

##### `resetLocalId` <a name="resetLocalId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetLocalId"></a>

```typescript
public resetLocalId(): void
```

##### `resetLocalIdType` <a name="resetLocalIdType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetLocalIdType"></a>

```typescript
public resetLocalIdType(): void
```

##### `resetPeerId` <a name="resetPeerId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetPeerId"></a>

```typescript
public resetPeerId(): void
```

##### `resetPeerIdType` <a name="resetPeerIdType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetPeerIdType"></a>

```typescript
public resetPeerIdType(): void
```

##### `resetPhaseOneNegotiationMode` <a name="resetPhaseOneNegotiationMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.resetPhaseOneNegotiationMode"></a>

```typescript
public resetPhaseOneNegotiationMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dpd">dpd</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference">EnterpriseVpnConnectionV5IkepolicyDpdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationAlgorithmInput">authenticationAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationMethodInput">authenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dhGroupInput">dhGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dpdInput">dpdInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd">EnterpriseVpnConnectionV5IkepolicyDpd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.ikeVersionInput">ikeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.lifetimeSecondsInput">lifetimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localIdInput">localIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localIdTypeInput">localIdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerIdInput">peerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerIdTypeInput">peerIdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.phaseOneNegotiationModeInput">phaseOneNegotiationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationAlgorithm">authenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationMethod">authenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dhGroup">dhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.ikeVersion">ikeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.lifetimeSeconds">lifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localId">localId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localIdType">localIdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerId">peerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerIdType">peerIdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.phaseOneNegotiationMode">phaseOneNegotiationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dpd`<sup>Required</sup> <a name="dpd" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dpd"></a>

```typescript
public readonly dpd: EnterpriseVpnConnectionV5IkepolicyDpdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpdOutputReference">EnterpriseVpnConnectionV5IkepolicyDpdOutputReference</a>

---

##### `authenticationAlgorithmInput`<sup>Optional</sup> <a name="authenticationAlgorithmInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationAlgorithmInput"></a>

```typescript
public readonly authenticationAlgorithmInput: string;
```

- *Type:* string

---

##### `authenticationMethodInput`<sup>Optional</sup> <a name="authenticationMethodInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationMethodInput"></a>

```typescript
public readonly authenticationMethodInput: string;
```

- *Type:* string

---

##### `dhGroupInput`<sup>Optional</sup> <a name="dhGroupInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dhGroupInput"></a>

```typescript
public readonly dhGroupInput: string;
```

- *Type:* string

---

##### `dpdInput`<sup>Optional</sup> <a name="dpdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dpdInput"></a>

```typescript
public readonly dpdInput: EnterpriseVpnConnectionV5IkepolicyDpd;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyDpd">EnterpriseVpnConnectionV5IkepolicyDpd</a>

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `ikeVersionInput`<sup>Optional</sup> <a name="ikeVersionInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.ikeVersionInput"></a>

```typescript
public readonly ikeVersionInput: string;
```

- *Type:* string

---

##### `lifetimeSecondsInput`<sup>Optional</sup> <a name="lifetimeSecondsInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.lifetimeSecondsInput"></a>

```typescript
public readonly lifetimeSecondsInput: number;
```

- *Type:* number

---

##### `localIdInput`<sup>Optional</sup> <a name="localIdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localIdInput"></a>

```typescript
public readonly localIdInput: string;
```

- *Type:* string

---

##### `localIdTypeInput`<sup>Optional</sup> <a name="localIdTypeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localIdTypeInput"></a>

```typescript
public readonly localIdTypeInput: string;
```

- *Type:* string

---

##### `peerIdInput`<sup>Optional</sup> <a name="peerIdInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerIdInput"></a>

```typescript
public readonly peerIdInput: string;
```

- *Type:* string

---

##### `peerIdTypeInput`<sup>Optional</sup> <a name="peerIdTypeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerIdTypeInput"></a>

```typescript
public readonly peerIdTypeInput: string;
```

- *Type:* string

---

##### `phaseOneNegotiationModeInput`<sup>Optional</sup> <a name="phaseOneNegotiationModeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.phaseOneNegotiationModeInput"></a>

```typescript
public readonly phaseOneNegotiationModeInput: string;
```

- *Type:* string

---

##### `authenticationAlgorithm`<sup>Required</sup> <a name="authenticationAlgorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationAlgorithm"></a>

```typescript
public readonly authenticationAlgorithm: string;
```

- *Type:* string

---

##### `authenticationMethod`<sup>Required</sup> <a name="authenticationMethod" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.authenticationMethod"></a>

```typescript
public readonly authenticationMethod: string;
```

- *Type:* string

---

##### `dhGroup`<sup>Required</sup> <a name="dhGroup" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.dhGroup"></a>

```typescript
public readonly dhGroup: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `ikeVersion`<sup>Required</sup> <a name="ikeVersion" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.ikeVersion"></a>

```typescript
public readonly ikeVersion: string;
```

- *Type:* string

---

##### `lifetimeSeconds`<sup>Required</sup> <a name="lifetimeSeconds" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.lifetimeSeconds"></a>

```typescript
public readonly lifetimeSeconds: number;
```

- *Type:* number

---

##### `localId`<sup>Required</sup> <a name="localId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localId"></a>

```typescript
public readonly localId: string;
```

- *Type:* string

---

##### `localIdType`<sup>Required</sup> <a name="localIdType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.localIdType"></a>

```typescript
public readonly localIdType: string;
```

- *Type:* string

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

---

##### `peerIdType`<sup>Required</sup> <a name="peerIdType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.peerIdType"></a>

```typescript
public readonly peerIdType: string;
```

- *Type:* string

---

##### `phaseOneNegotiationMode`<sup>Required</sup> <a name="phaseOneNegotiationMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.phaseOneNegotiationMode"></a>

```typescript
public readonly phaseOneNegotiationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IkepolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EnterpriseVpnConnectionV5Ikepolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ikepolicy">EnterpriseVpnConnectionV5Ikepolicy</a>

---


### EnterpriseVpnConnectionV5IpsecpolicyOutputReference <a name="EnterpriseVpnConnectionV5IpsecpolicyOutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.Initializer"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

new enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetAuthenticationAlgorithm">resetAuthenticationAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetEncapsulationMode">resetEncapsulationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetLifetimeSeconds">resetLifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetPfs">resetPfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetTransformProtocol">resetTransformProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationAlgorithm` <a name="resetAuthenticationAlgorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetAuthenticationAlgorithm"></a>

```typescript
public resetAuthenticationAlgorithm(): void
```

##### `resetEncapsulationMode` <a name="resetEncapsulationMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetEncapsulationMode"></a>

```typescript
public resetEncapsulationMode(): void
```

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetEncryptionAlgorithm"></a>

```typescript
public resetEncryptionAlgorithm(): void
```

##### `resetLifetimeSeconds` <a name="resetLifetimeSeconds" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetLifetimeSeconds"></a>

```typescript
public resetLifetimeSeconds(): void
```

##### `resetPfs` <a name="resetPfs" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetPfs"></a>

```typescript
public resetPfs(): void
```

##### `resetTransformProtocol` <a name="resetTransformProtocol" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.resetTransformProtocol"></a>

```typescript
public resetTransformProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.authenticationAlgorithmInput">authenticationAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encapsulationModeInput">encapsulationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.lifetimeSecondsInput">lifetimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.pfsInput">pfsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.transformProtocolInput">transformProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.authenticationAlgorithm">authenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encapsulationMode">encapsulationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.lifetimeSeconds">lifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.pfs">pfs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.transformProtocol">transformProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationAlgorithmInput`<sup>Optional</sup> <a name="authenticationAlgorithmInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.authenticationAlgorithmInput"></a>

```typescript
public readonly authenticationAlgorithmInput: string;
```

- *Type:* string

---

##### `encapsulationModeInput`<sup>Optional</sup> <a name="encapsulationModeInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encapsulationModeInput"></a>

```typescript
public readonly encapsulationModeInput: string;
```

- *Type:* string

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `lifetimeSecondsInput`<sup>Optional</sup> <a name="lifetimeSecondsInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.lifetimeSecondsInput"></a>

```typescript
public readonly lifetimeSecondsInput: number;
```

- *Type:* number

---

##### `pfsInput`<sup>Optional</sup> <a name="pfsInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.pfsInput"></a>

```typescript
public readonly pfsInput: string;
```

- *Type:* string

---

##### `transformProtocolInput`<sup>Optional</sup> <a name="transformProtocolInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.transformProtocolInput"></a>

```typescript
public readonly transformProtocolInput: string;
```

- *Type:* string

---

##### `authenticationAlgorithm`<sup>Required</sup> <a name="authenticationAlgorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.authenticationAlgorithm"></a>

```typescript
public readonly authenticationAlgorithm: string;
```

- *Type:* string

---

##### `encapsulationMode`<sup>Required</sup> <a name="encapsulationMode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encapsulationMode"></a>

```typescript
public readonly encapsulationMode: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `lifetimeSeconds`<sup>Required</sup> <a name="lifetimeSeconds" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.lifetimeSeconds"></a>

```typescript
public readonly lifetimeSeconds: number;
```

- *Type:* number

---

##### `pfs`<sup>Required</sup> <a name="pfs" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.pfs"></a>

```typescript
public readonly pfs: string;
```

- *Type:* string

---

##### `transformProtocol`<sup>Required</sup> <a name="transformProtocol" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.transformProtocol"></a>

```typescript
public readonly transformProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5IpsecpolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EnterpriseVpnConnectionV5Ipsecpolicy;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Ipsecpolicy">EnterpriseVpnConnectionV5Ipsecpolicy</a>

---


### EnterpriseVpnConnectionV5PolicyRulesList <a name="EnterpriseVpnConnectionV5PolicyRulesList" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.Initializer"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

new enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.get"></a>

```typescript
public get(index: number): EnterpriseVpnConnectionV5PolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EnterpriseVpnConnectionV5PolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>[]

---


### EnterpriseVpnConnectionV5PolicyRulesOutputReference <a name="EnterpriseVpnConnectionV5PolicyRulesOutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

new enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.destinationInput">destinationInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.destination">destination</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string[];
```

- *Type:* string[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.destination"></a>

```typescript
public readonly destination: string[];
```

- *Type:* string[]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EnterpriseVpnConnectionV5PolicyRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5PolicyRules">EnterpriseVpnConnectionV5PolicyRules</a>

---


### EnterpriseVpnConnectionV5TimeoutsOutputReference <a name="EnterpriseVpnConnectionV5TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.Initializer"></a>

```typescript
import { enterpriseVpnConnectionV5 } from '@cdktf/provider-opentelekomcloud'

new enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EnterpriseVpnConnectionV5Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnConnectionV5.EnterpriseVpnConnectionV5Timeouts">EnterpriseVpnConnectionV5Timeouts</a>

---



