# `lbListenerV3` Submodule <a name="`lbListenerV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbListenerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbListenerV3 <a name="LbListenerV3" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3 opentelekomcloud_lb_listener_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer"></a>

```typescript
import { lbListenerV3 } from '@cdktf/provider-opentelekomcloud'

new lbListenerV3.LbListenerV3(scope: Construct, id: string, config: LbListenerV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config">LbListenerV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config">LbListenerV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders">putInsertHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup">putIpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdvancedForwarding">resetAdvancedForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientCaTlsContainerRef">resetClientCaTlsContainerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientTimeout">resetClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultPoolId">resetDefaultPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultTlsContainerRef">resetDefaultTlsContainerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetHttp2Enable">resetHttp2Enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetInsertHeaders">resetInsertHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetIpGroup">resetIpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetKeepAliveTimeout">resetKeepAliveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberRetryEnable">resetMemberRetryEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberTimeout">resetMemberTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSecurityPolicyId">resetSecurityPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniContainerRefs">resetSniContainerRefs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniMatchAlgo">resetSniMatchAlgo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTlsCiphersPolicy">resetTlsCiphersPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInsertHeaders` <a name="putInsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders"></a>

```typescript
public putInsertHeaders(value: LbListenerV3InsertHeaders): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

---

##### `putIpGroup` <a name="putIpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup"></a>

```typescript
public putIpGroup(value: LbListenerV3IpGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdminStateUp"></a>

```typescript
public resetAdminStateUp(): void
```

##### `resetAdvancedForwarding` <a name="resetAdvancedForwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdvancedForwarding"></a>

```typescript
public resetAdvancedForwarding(): void
```

##### `resetClientCaTlsContainerRef` <a name="resetClientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientCaTlsContainerRef"></a>

```typescript
public resetClientCaTlsContainerRef(): void
```

##### `resetClientTimeout` <a name="resetClientTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientTimeout"></a>

```typescript
public resetClientTimeout(): void
```

##### `resetDefaultPoolId` <a name="resetDefaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultPoolId"></a>

```typescript
public resetDefaultPoolId(): void
```

##### `resetDefaultTlsContainerRef` <a name="resetDefaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultTlsContainerRef"></a>

```typescript
public resetDefaultTlsContainerRef(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHttp2Enable` <a name="resetHttp2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetHttp2Enable"></a>

```typescript
public resetHttp2Enable(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInsertHeaders` <a name="resetInsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetInsertHeaders"></a>

```typescript
public resetInsertHeaders(): void
```

##### `resetIpGroup` <a name="resetIpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetIpGroup"></a>

```typescript
public resetIpGroup(): void
```

##### `resetKeepAliveTimeout` <a name="resetKeepAliveTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetKeepAliveTimeout"></a>

```typescript
public resetKeepAliveTimeout(): void
```

##### `resetMemberRetryEnable` <a name="resetMemberRetryEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberRetryEnable"></a>

```typescript
public resetMemberRetryEnable(): void
```

##### `resetMemberTimeout` <a name="resetMemberTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberTimeout"></a>

```typescript
public resetMemberTimeout(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSecurityPolicyId` <a name="resetSecurityPolicyId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSecurityPolicyId"></a>

```typescript
public resetSecurityPolicyId(): void
```

##### `resetSniContainerRefs` <a name="resetSniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniContainerRefs"></a>

```typescript
public resetSniContainerRefs(): void
```

##### `resetSniMatchAlgo` <a name="resetSniMatchAlgo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniMatchAlgo"></a>

```typescript
public resetSniMatchAlgo(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTlsCiphersPolicy` <a name="resetTlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTlsCiphersPolicy"></a>

```typescript
public resetTlsCiphersPolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbListenerV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct"></a>

```typescript
import { lbListenerV3 } from '@cdktf/provider-opentelekomcloud'

lbListenerV3.LbListenerV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement"></a>

```typescript
import { lbListenerV3 } from '@cdktf/provider-opentelekomcloud'

lbListenerV3.LbListenerV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource"></a>

```typescript
import { lbListenerV3 } from '@cdktf/provider-opentelekomcloud'

lbListenerV3.LbListenerV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport"></a>

```typescript
import { lbListenerV3 } from '@cdktf/provider-opentelekomcloud'

lbListenerV3.LbListenerV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LbListenerV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbListenerV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbListenerV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbListenerV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeaders">insertHeaders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference">LbListenerV3InsertHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroup">ipGroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference">LbListenerV3IpGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUpInput">adminStateUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwardingInput">advancedForwardingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRefInput">clientCaTlsContainerRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeoutInput">clientTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolIdInput">defaultPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRefInput">defaultTlsContainerRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2EnableInput">http2EnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeadersInput">insertHeadersInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroupInput">ipGroupInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeoutInput">keepAliveTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerIdInput">loadbalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnableInput">memberRetryEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeoutInput">memberTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPortInput">protocolPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyIdInput">securityPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefsInput">sniContainerRefsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgoInput">sniMatchAlgoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicyInput">tlsCiphersPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwarding">advancedForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRef">clientCaTlsContainerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeout">clientTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolId">defaultPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRef">defaultTlsContainerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2Enable">http2Enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeout">keepAliveTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerId">loadbalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnable">memberRetryEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeout">memberTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPort">protocolPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyId">securityPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefs">sniContainerRefs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgo">sniMatchAlgo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicy">tlsCiphersPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `insertHeaders`<sup>Required</sup> <a name="insertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeaders"></a>

```typescript
public readonly insertHeaders: LbListenerV3InsertHeadersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference">LbListenerV3InsertHeadersOutputReference</a>

---

##### `ipGroup`<sup>Required</sup> <a name="ipGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroup"></a>

```typescript
public readonly ipGroup: LbListenerV3IpGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference">LbListenerV3IpGroupOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUpInput"></a>

```typescript
public readonly adminStateUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `advancedForwardingInput`<sup>Optional</sup> <a name="advancedForwardingInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwardingInput"></a>

```typescript
public readonly advancedForwardingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCaTlsContainerRefInput`<sup>Optional</sup> <a name="clientCaTlsContainerRefInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRefInput"></a>

```typescript
public readonly clientCaTlsContainerRefInput: string;
```

- *Type:* string

---

##### `clientTimeoutInput`<sup>Optional</sup> <a name="clientTimeoutInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeoutInput"></a>

```typescript
public readonly clientTimeoutInput: number;
```

- *Type:* number

---

##### `defaultPoolIdInput`<sup>Optional</sup> <a name="defaultPoolIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolIdInput"></a>

```typescript
public readonly defaultPoolIdInput: string;
```

- *Type:* string

---

##### `defaultTlsContainerRefInput`<sup>Optional</sup> <a name="defaultTlsContainerRefInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRefInput"></a>

```typescript
public readonly defaultTlsContainerRefInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `http2EnableInput`<sup>Optional</sup> <a name="http2EnableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2EnableInput"></a>

```typescript
public readonly http2EnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `insertHeadersInput`<sup>Optional</sup> <a name="insertHeadersInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeadersInput"></a>

```typescript
public readonly insertHeadersInput: LbListenerV3InsertHeaders;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

---

##### `ipGroupInput`<sup>Optional</sup> <a name="ipGroupInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroupInput"></a>

```typescript
public readonly ipGroupInput: LbListenerV3IpGroup;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>

---

##### `keepAliveTimeoutInput`<sup>Optional</sup> <a name="keepAliveTimeoutInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeoutInput"></a>

```typescript
public readonly keepAliveTimeoutInput: number;
```

- *Type:* number

---

##### `loadbalancerIdInput`<sup>Optional</sup> <a name="loadbalancerIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerIdInput"></a>

```typescript
public readonly loadbalancerIdInput: string;
```

- *Type:* string

---

##### `memberRetryEnableInput`<sup>Optional</sup> <a name="memberRetryEnableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnableInput"></a>

```typescript
public readonly memberRetryEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memberTimeoutInput`<sup>Optional</sup> <a name="memberTimeoutInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeoutInput"></a>

```typescript
public readonly memberTimeoutInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `protocolPortInput`<sup>Optional</sup> <a name="protocolPortInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPortInput"></a>

```typescript
public readonly protocolPortInput: number;
```

- *Type:* number

---

##### `securityPolicyIdInput`<sup>Optional</sup> <a name="securityPolicyIdInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyIdInput"></a>

```typescript
public readonly securityPolicyIdInput: string;
```

- *Type:* string

---

##### `sniContainerRefsInput`<sup>Optional</sup> <a name="sniContainerRefsInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefsInput"></a>

```typescript
public readonly sniContainerRefsInput: string[];
```

- *Type:* string[]

---

##### `sniMatchAlgoInput`<sup>Optional</sup> <a name="sniMatchAlgoInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgoInput"></a>

```typescript
public readonly sniMatchAlgoInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tlsCiphersPolicyInput`<sup>Optional</sup> <a name="tlsCiphersPolicyInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicyInput"></a>

```typescript
public readonly tlsCiphersPolicyInput: string;
```

- *Type:* string

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `advancedForwarding`<sup>Required</sup> <a name="advancedForwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwarding"></a>

```typescript
public readonly advancedForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCaTlsContainerRef`<sup>Required</sup> <a name="clientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRef"></a>

```typescript
public readonly clientCaTlsContainerRef: string;
```

- *Type:* string

---

##### `clientTimeout`<sup>Required</sup> <a name="clientTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeout"></a>

```typescript
public readonly clientTimeout: number;
```

- *Type:* number

---

##### `defaultPoolId`<sup>Required</sup> <a name="defaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolId"></a>

```typescript
public readonly defaultPoolId: string;
```

- *Type:* string

---

##### `defaultTlsContainerRef`<sup>Required</sup> <a name="defaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRef"></a>

```typescript
public readonly defaultTlsContainerRef: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `http2Enable`<sup>Required</sup> <a name="http2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2Enable"></a>

```typescript
public readonly http2Enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keepAliveTimeout`<sup>Required</sup> <a name="keepAliveTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeout"></a>

```typescript
public readonly keepAliveTimeout: number;
```

- *Type:* number

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerId"></a>

```typescript
public readonly loadbalancerId: string;
```

- *Type:* string

---

##### `memberRetryEnable`<sup>Required</sup> <a name="memberRetryEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnable"></a>

```typescript
public readonly memberRetryEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memberTimeout`<sup>Required</sup> <a name="memberTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeout"></a>

```typescript
public readonly memberTimeout: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPort"></a>

```typescript
public readonly protocolPort: number;
```

- *Type:* number

---

##### `securityPolicyId`<sup>Required</sup> <a name="securityPolicyId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyId"></a>

```typescript
public readonly securityPolicyId: string;
```

- *Type:* string

---

##### `sniContainerRefs`<sup>Required</sup> <a name="sniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefs"></a>

```typescript
public readonly sniContainerRefs: string[];
```

- *Type:* string[]

---

##### `sniMatchAlgo`<sup>Required</sup> <a name="sniMatchAlgo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgo"></a>

```typescript
public readonly sniMatchAlgo: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tlsCiphersPolicy`<sup>Required</sup> <a name="tlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicy"></a>

```typescript
public readonly tlsCiphersPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbListenerV3Config <a name="LbListenerV3Config" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.Initializer"></a>

```typescript
import { lbListenerV3 } from '@cdktf/provider-opentelekomcloud'

const lbListenerV3Config: lbListenerV3.LbListenerV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.loadbalancerId">loadbalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#protocol LbListenerV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocolPort">protocolPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#protocol_port LbListenerV3#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.advancedForwarding">advancedForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientCaTlsContainerRef">clientCaTlsContainerRef</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientTimeout">clientTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#client_timeout LbListenerV3#client_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultPoolId">defaultPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultTlsContainerRef">defaultTlsContainerRef</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#description LbListenerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.http2Enable">http2Enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#http2_enable LbListenerV3#http2_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#id LbListenerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.insertHeaders">insertHeaders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | insert_headers block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.ipGroup">ipGroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a></code> | ip_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.keepAliveTimeout">keepAliveTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberRetryEnable">memberRetryEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberTimeout">memberTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#member_timeout LbListenerV3#member_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#name LbListenerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.securityPolicyId">securityPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniContainerRefs">sniContainerRefs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniMatchAlgo">sniMatchAlgo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#tags LbListenerV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tlsCiphersPolicy">tlsCiphersPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.loadbalancerId"></a>

```typescript
public readonly loadbalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#protocol LbListenerV3#protocol}.

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocolPort"></a>

```typescript
public readonly protocolPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#protocol_port LbListenerV3#protocol_port}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}.

---

##### `advancedForwarding`<sup>Optional</sup> <a name="advancedForwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.advancedForwarding"></a>

```typescript
public readonly advancedForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}.

---

##### `clientCaTlsContainerRef`<sup>Optional</sup> <a name="clientCaTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientCaTlsContainerRef"></a>

```typescript
public readonly clientCaTlsContainerRef: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}.

---

##### `clientTimeout`<sup>Optional</sup> <a name="clientTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientTimeout"></a>

```typescript
public readonly clientTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#client_timeout LbListenerV3#client_timeout}.

---

##### `defaultPoolId`<sup>Optional</sup> <a name="defaultPoolId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultPoolId"></a>

```typescript
public readonly defaultPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}.

---

##### `defaultTlsContainerRef`<sup>Optional</sup> <a name="defaultTlsContainerRef" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultTlsContainerRef"></a>

```typescript
public readonly defaultTlsContainerRef: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#description LbListenerV3#description}.

---

##### `http2Enable`<sup>Optional</sup> <a name="http2Enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.http2Enable"></a>

```typescript
public readonly http2Enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#http2_enable LbListenerV3#http2_enable}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#id LbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insertHeaders`<sup>Optional</sup> <a name="insertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.insertHeaders"></a>

```typescript
public readonly insertHeaders: LbListenerV3InsertHeaders;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

insert_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#insert_headers LbListenerV3#insert_headers}

---

##### `ipGroup`<sup>Optional</sup> <a name="ipGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.ipGroup"></a>

```typescript
public readonly ipGroup: LbListenerV3IpGroup;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>

ip_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#ip_group LbListenerV3#ip_group}

---

##### `keepAliveTimeout`<sup>Optional</sup> <a name="keepAliveTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.keepAliveTimeout"></a>

```typescript
public readonly keepAliveTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}.

---

##### `memberRetryEnable`<sup>Optional</sup> <a name="memberRetryEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberRetryEnable"></a>

```typescript
public readonly memberRetryEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}.

---

##### `memberTimeout`<sup>Optional</sup> <a name="memberTimeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberTimeout"></a>

```typescript
public readonly memberTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#member_timeout LbListenerV3#member_timeout}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#name LbListenerV3#name}.

---

##### `securityPolicyId`<sup>Optional</sup> <a name="securityPolicyId" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.securityPolicyId"></a>

```typescript
public readonly securityPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}.

---

##### `sniContainerRefs`<sup>Optional</sup> <a name="sniContainerRefs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniContainerRefs"></a>

```typescript
public readonly sniContainerRefs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}.

---

##### `sniMatchAlgo`<sup>Optional</sup> <a name="sniMatchAlgo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniMatchAlgo"></a>

```typescript
public readonly sniMatchAlgo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#tags LbListenerV3#tags}.

---

##### `tlsCiphersPolicy`<sup>Optional</sup> <a name="tlsCiphersPolicy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tlsCiphersPolicy"></a>

```typescript
public readonly tlsCiphersPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}.

---

### LbListenerV3InsertHeaders <a name="LbListenerV3InsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.Initializer"></a>

```typescript
import { lbListenerV3 } from '@cdktf/provider-opentelekomcloud'

const lbListenerV3InsertHeaders: lbListenerV3.LbListenerV3InsertHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedForPort">forwardedForPort</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#forwarded_for_port LbListenerV3#forwarded_for_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedHost">forwardedHost</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#forwarded_host LbListenerV3#forwarded_host}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedPort">forwardedPort</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#forwarded_port LbListenerV3#forwarded_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardElbIp">forwardElbIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#forward_elb_ip LbListenerV3#forward_elb_ip}. |

---

##### `forwardedForPort`<sup>Optional</sup> <a name="forwardedForPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedForPort"></a>

```typescript
public readonly forwardedForPort: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#forwarded_for_port LbListenerV3#forwarded_for_port}.

---

##### `forwardedHost`<sup>Optional</sup> <a name="forwardedHost" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedHost"></a>

```typescript
public readonly forwardedHost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#forwarded_host LbListenerV3#forwarded_host}.

---

##### `forwardedPort`<sup>Optional</sup> <a name="forwardedPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedPort"></a>

```typescript
public readonly forwardedPort: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#forwarded_port LbListenerV3#forwarded_port}.

---

##### `forwardElbIp`<sup>Optional</sup> <a name="forwardElbIp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardElbIp"></a>

```typescript
public readonly forwardElbIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#forward_elb_ip LbListenerV3#forward_elb_ip}.

---

### LbListenerV3IpGroup <a name="LbListenerV3IpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.Initializer"></a>

```typescript
import { lbListenerV3 } from '@cdktf/provider-opentelekomcloud'

const lbListenerV3IpGroup: lbListenerV3.LbListenerV3IpGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#id LbListenerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#enable LbListenerV3#enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#type LbListenerV3#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#id LbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#enable LbListenerV3#enable}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/lb_listener_v3#type LbListenerV3#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbListenerV3InsertHeadersOutputReference <a name="LbListenerV3InsertHeadersOutputReference" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer"></a>

```typescript
import { lbListenerV3 } from '@cdktf/provider-opentelekomcloud'

new lbListenerV3.LbListenerV3InsertHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedForPort">resetForwardedForPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedHost">resetForwardedHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedPort">resetForwardedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardElbIp">resetForwardElbIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForwardedForPort` <a name="resetForwardedForPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedForPort"></a>

```typescript
public resetForwardedForPort(): void
```

##### `resetForwardedHost` <a name="resetForwardedHost" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedHost"></a>

```typescript
public resetForwardedHost(): void
```

##### `resetForwardedPort` <a name="resetForwardedPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedPort"></a>

```typescript
public resetForwardedPort(): void
```

##### `resetForwardElbIp` <a name="resetForwardElbIp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardElbIp"></a>

```typescript
public resetForwardElbIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPortInput">forwardedForPortInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHostInput">forwardedHostInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPortInput">forwardedPortInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIpInput">forwardElbIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPort">forwardedForPort</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHost">forwardedHost</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPort">forwardedPort</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIp">forwardElbIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forwardedForPortInput`<sup>Optional</sup> <a name="forwardedForPortInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPortInput"></a>

```typescript
public readonly forwardedForPortInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardedHostInput`<sup>Optional</sup> <a name="forwardedHostInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHostInput"></a>

```typescript
public readonly forwardedHostInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardedPortInput`<sup>Optional</sup> <a name="forwardedPortInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPortInput"></a>

```typescript
public readonly forwardedPortInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardElbIpInput`<sup>Optional</sup> <a name="forwardElbIpInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIpInput"></a>

```typescript
public readonly forwardElbIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardedForPort`<sup>Required</sup> <a name="forwardedForPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPort"></a>

```typescript
public readonly forwardedForPort: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardedHost`<sup>Required</sup> <a name="forwardedHost" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHost"></a>

```typescript
public readonly forwardedHost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardedPort`<sup>Required</sup> <a name="forwardedPort" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPort"></a>

```typescript
public readonly forwardedPort: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forwardElbIp`<sup>Required</sup> <a name="forwardElbIp" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIp"></a>

```typescript
public readonly forwardElbIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerV3InsertHeaders;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

---


### LbListenerV3IpGroupOutputReference <a name="LbListenerV3IpGroupOutputReference" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer"></a>

```typescript
import { lbListenerV3 } from '@cdktf/provider-opentelekomcloud'

new lbListenerV3.LbListenerV3IpGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbListenerV3IpGroup;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>

---



