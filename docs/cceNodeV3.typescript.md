# `opentelekomcloud_cce_node_v3`

Refer to the Terraform Registory for docs: [`opentelekomcloud_cce_node_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3).

# `cceNodeV3` Submodule <a name="`cceNodeV3` Submodule" id="@cdktf/provider-opentelekomcloud.cceNodeV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CceNodeV3 <a name="CceNodeV3" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3 opentelekomcloud_cce_node_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeV3.CceNodeV3(scope: Construct, id: string, config: CceNodeV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config">CceNodeV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config">CceNodeV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putDataVolumes">putDataVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putRootVolume">putRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBandwidthChargeMode">resetBandwidthChargeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBandwidthSize">resetBandwidthSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBillingMode">resetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDockerBaseSize">resetDockerBaseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDockerLvmConfigOverride">resetDockerLvmConfigOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEcsPerformanceType">resetEcsPerformanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEipCount">resetEipCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEipIds">resetEipIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetExtendParamChargingMode">resetExtendParamChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetIptype">resetIptype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetK8STags">resetK8STags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetMaxPods">resetMaxPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOrderId">resetOrderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOs">resetOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPostinstall">resetPostinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPreinstall">resetPreinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetProductId">resetProductId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetSharetype">resetSharetype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTaints">resetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDataVolumes` <a name="putDataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putDataVolumes"></a>

```typescript
public putDataVolumes(value: IResolvable | CceNodeV3DataVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putDataVolumes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>[]

---

##### `putRootVolume` <a name="putRootVolume" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putRootVolume"></a>

```typescript
public putRootVolume(value: CceNodeV3RootVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a>

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTaints"></a>

```typescript
public putTaints(value: IResolvable | CceNodeV3Taints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTaints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTimeouts"></a>

```typescript
public putTimeouts(value: CceNodeV3Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetBandwidthChargeMode` <a name="resetBandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBandwidthChargeMode"></a>

```typescript
public resetBandwidthChargeMode(): void
```

##### `resetBandwidthSize` <a name="resetBandwidthSize" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBandwidthSize"></a>

```typescript
public resetBandwidthSize(): void
```

##### `resetBillingMode` <a name="resetBillingMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetBillingMode"></a>

```typescript
public resetBillingMode(): void
```

##### `resetDockerBaseSize` <a name="resetDockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDockerBaseSize"></a>

```typescript
public resetDockerBaseSize(): void
```

##### `resetDockerLvmConfigOverride` <a name="resetDockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetDockerLvmConfigOverride"></a>

```typescript
public resetDockerLvmConfigOverride(): void
```

##### `resetEcsPerformanceType` <a name="resetEcsPerformanceType" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEcsPerformanceType"></a>

```typescript
public resetEcsPerformanceType(): void
```

##### `resetEipCount` <a name="resetEipCount" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEipCount"></a>

```typescript
public resetEipCount(): void
```

##### `resetEipIds` <a name="resetEipIds" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetEipIds"></a>

```typescript
public resetEipIds(): void
```

##### `resetExtendParamChargingMode` <a name="resetExtendParamChargingMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetExtendParamChargingMode"></a>

```typescript
public resetExtendParamChargingMode(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIptype` <a name="resetIptype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetIptype"></a>

```typescript
public resetIptype(): void
```

##### `resetK8STags` <a name="resetK8STags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetK8STags"></a>

```typescript
public resetK8STags(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaxPods` <a name="resetMaxPods" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetMaxPods"></a>

```typescript
public resetMaxPods(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOrderId` <a name="resetOrderId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOrderId"></a>

```typescript
public resetOrderId(): void
```

##### `resetOs` <a name="resetOs" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetOs"></a>

```typescript
public resetOs(): void
```

##### `resetPostinstall` <a name="resetPostinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPostinstall"></a>

```typescript
public resetPostinstall(): void
```

##### `resetPreinstall` <a name="resetPreinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPreinstall"></a>

```typescript
public resetPreinstall(): void
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPrivateIp"></a>

```typescript
public resetPrivateIp(): void
```

##### `resetProductId` <a name="resetProductId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetProductId"></a>

```typescript
public resetProductId(): void
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetPublicKey"></a>

```typescript
public resetPublicKey(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetSharetype` <a name="resetSharetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetSharetype"></a>

```typescript
public resetSharetype(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTaints"></a>

```typescript
public resetTaints(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isConstruct"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

cceNodeV3.CceNodeV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformElement"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

cceNodeV3.CceNodeV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformResource"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

cceNodeV3.CceNodeV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dataVolumes">dataVolumes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList">CceNodeV3DataVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicIp">publicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference">CceNodeV3RootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList">CceNodeV3TaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference">CceNodeV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthChargeModeInput">bandwidthChargeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthSizeInput">bandwidthSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.billingModeInput">billingModeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dataVolumesInput">dataVolumesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerBaseSizeInput">dockerBaseSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerLvmConfigOverrideInput">dockerLvmConfigOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.ecsPerformanceTypeInput">ecsPerformanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipCountInput">eipCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipIdsInput">eipIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.extendParamChargingModeInput">extendParamChargingModeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.flavorIdInput">flavorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.iptypeInput">iptypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.k8STagsInput">k8STagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.keyPairInput">keyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.maxPodsInput">maxPodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.orderIdInput">orderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.osInput">osInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.postinstallInput">postinstallInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.preinstallInput">preinstallInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.rootVolumeInput">rootVolumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.sharetypeInput">sharetypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.taintsInput">taintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthChargeMode">bandwidthChargeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthSize">bandwidthSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.billingMode">billingMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerBaseSize">dockerBaseSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerLvmConfigOverride">dockerLvmConfigOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.ecsPerformanceType">ecsPerformanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipCount">eipCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipIds">eipIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.extendParamChargingMode">extendParamChargingMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.flavorId">flavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.iptype">iptype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.k8STags">k8STags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.keyPair">keyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.maxPods">maxPods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.orderId">orderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.os">os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.postinstall">postinstall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.preinstall">preinstall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.sharetype">sharetype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataVolumes`<sup>Required</sup> <a name="dataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dataVolumes"></a>

```typescript
public readonly dataVolumes: CceNodeV3DataVolumesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList">CceNodeV3DataVolumesList</a>

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicIp"></a>

```typescript
public readonly publicIp: string;
```

- *Type:* string

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.rootVolume"></a>

```typescript
public readonly rootVolume: CceNodeV3RootVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference">CceNodeV3RootVolumeOutputReference</a>

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.taints"></a>

```typescript
public readonly taints: CceNodeV3TaintsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList">CceNodeV3TaintsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.timeouts"></a>

```typescript
public readonly timeouts: CceNodeV3TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference">CceNodeV3TimeoutsOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `bandwidthChargeModeInput`<sup>Optional</sup> <a name="bandwidthChargeModeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthChargeModeInput"></a>

```typescript
public readonly bandwidthChargeModeInput: string;
```

- *Type:* string

---

##### `bandwidthSizeInput`<sup>Optional</sup> <a name="bandwidthSizeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthSizeInput"></a>

```typescript
public readonly bandwidthSizeInput: number;
```

- *Type:* number

---

##### `billingModeInput`<sup>Optional</sup> <a name="billingModeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.billingModeInput"></a>

```typescript
public readonly billingModeInput: number;
```

- *Type:* number

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `dataVolumesInput`<sup>Optional</sup> <a name="dataVolumesInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dataVolumesInput"></a>

```typescript
public readonly dataVolumesInput: IResolvable | CceNodeV3DataVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>[]

---

##### `dockerBaseSizeInput`<sup>Optional</sup> <a name="dockerBaseSizeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerBaseSizeInput"></a>

```typescript
public readonly dockerBaseSizeInput: number;
```

- *Type:* number

---

##### `dockerLvmConfigOverrideInput`<sup>Optional</sup> <a name="dockerLvmConfigOverrideInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerLvmConfigOverrideInput"></a>

```typescript
public readonly dockerLvmConfigOverrideInput: string;
```

- *Type:* string

---

##### `ecsPerformanceTypeInput`<sup>Optional</sup> <a name="ecsPerformanceTypeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.ecsPerformanceTypeInput"></a>

```typescript
public readonly ecsPerformanceTypeInput: string;
```

- *Type:* string

---

##### `eipCountInput`<sup>Optional</sup> <a name="eipCountInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipCountInput"></a>

```typescript
public readonly eipCountInput: number;
```

- *Type:* number

---

##### `eipIdsInput`<sup>Optional</sup> <a name="eipIdsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipIdsInput"></a>

```typescript
public readonly eipIdsInput: string[];
```

- *Type:* string[]

---

##### `extendParamChargingModeInput`<sup>Optional</sup> <a name="extendParamChargingModeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.extendParamChargingModeInput"></a>

```typescript
public readonly extendParamChargingModeInput: number;
```

- *Type:* number

---

##### `flavorIdInput`<sup>Optional</sup> <a name="flavorIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.flavorIdInput"></a>

```typescript
public readonly flavorIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iptypeInput`<sup>Optional</sup> <a name="iptypeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.iptypeInput"></a>

```typescript
public readonly iptypeInput: string;
```

- *Type:* string

---

##### `k8STagsInput`<sup>Optional</sup> <a name="k8STagsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.k8STagsInput"></a>

```typescript
public readonly k8STagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyPairInput`<sup>Optional</sup> <a name="keyPairInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.keyPairInput"></a>

```typescript
public readonly keyPairInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxPodsInput`<sup>Optional</sup> <a name="maxPodsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.maxPodsInput"></a>

```typescript
public readonly maxPodsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orderIdInput`<sup>Optional</sup> <a name="orderIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.orderIdInput"></a>

```typescript
public readonly orderIdInput: string;
```

- *Type:* string

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.osInput"></a>

```typescript
public readonly osInput: string;
```

- *Type:* string

---

##### `postinstallInput`<sup>Optional</sup> <a name="postinstallInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.postinstallInput"></a>

```typescript
public readonly postinstallInput: string;
```

- *Type:* string

---

##### `preinstallInput`<sup>Optional</sup> <a name="preinstallInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.preinstallInput"></a>

```typescript
public readonly preinstallInput: string;
```

- *Type:* string

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `rootVolumeInput`<sup>Optional</sup> <a name="rootVolumeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.rootVolumeInput"></a>

```typescript
public readonly rootVolumeInput: CceNodeV3RootVolume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `sharetypeInput`<sup>Optional</sup> <a name="sharetypeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.sharetypeInput"></a>

```typescript
public readonly sharetypeInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.taintsInput"></a>

```typescript
public readonly taintsInput: IResolvable | CceNodeV3Taints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CceNodeV3Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a> | cdktf.IResolvable

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `bandwidthChargeMode`<sup>Required</sup> <a name="bandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthChargeMode"></a>

```typescript
public readonly bandwidthChargeMode: string;
```

- *Type:* string

---

##### `bandwidthSize`<sup>Required</sup> <a name="bandwidthSize" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.bandwidthSize"></a>

```typescript
public readonly bandwidthSize: number;
```

- *Type:* number

---

##### `billingMode`<sup>Required</sup> <a name="billingMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.billingMode"></a>

```typescript
public readonly billingMode: number;
```

- *Type:* number

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `dockerBaseSize`<sup>Required</sup> <a name="dockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerBaseSize"></a>

```typescript
public readonly dockerBaseSize: number;
```

- *Type:* number

---

##### `dockerLvmConfigOverride`<sup>Required</sup> <a name="dockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.dockerLvmConfigOverride"></a>

```typescript
public readonly dockerLvmConfigOverride: string;
```

- *Type:* string

---

##### `ecsPerformanceType`<sup>Required</sup> <a name="ecsPerformanceType" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.ecsPerformanceType"></a>

```typescript
public readonly ecsPerformanceType: string;
```

- *Type:* string

---

##### `eipCount`<sup>Required</sup> <a name="eipCount" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipCount"></a>

```typescript
public readonly eipCount: number;
```

- *Type:* number

---

##### `eipIds`<sup>Required</sup> <a name="eipIds" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.eipIds"></a>

```typescript
public readonly eipIds: string[];
```

- *Type:* string[]

---

##### `extendParamChargingMode`<sup>Required</sup> <a name="extendParamChargingMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.extendParamChargingMode"></a>

```typescript
public readonly extendParamChargingMode: number;
```

- *Type:* number

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iptype`<sup>Required</sup> <a name="iptype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.iptype"></a>

```typescript
public readonly iptype: string;
```

- *Type:* string

---

##### `k8STags`<sup>Required</sup> <a name="k8STags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.k8STags"></a>

```typescript
public readonly k8STags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxPods`<sup>Required</sup> <a name="maxPods" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.maxPods"></a>

```typescript
public readonly maxPods: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.orderId"></a>

```typescript
public readonly orderId: string;
```

- *Type:* string

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

---

##### `postinstall`<sup>Required</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.postinstall"></a>

```typescript
public readonly postinstall: string;
```

- *Type:* string

---

##### `preinstall`<sup>Required</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.preinstall"></a>

```typescript
public readonly preinstall: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `sharetype`<sup>Required</sup> <a name="sharetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.sharetype"></a>

```typescript
public readonly sharetype: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CceNodeV3Config <a name="CceNodeV3Config" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.Initializer"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodeV3Config: cceNodeV3.CceNodeV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#availability_zone CceNodeV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#cluster_id CceNodeV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dataVolumes">dataVolumes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>[]</code> | data_volumes block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.flavorId">flavorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#flavor_id CceNodeV3#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.keyPair">keyPair</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#key_pair CceNodeV3#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#annotations CceNodeV3#annotations}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.bandwidthChargeMode">bandwidthChargeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#bandwidth_charge_mode CceNodeV3#bandwidth_charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.bandwidthSize">bandwidthSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#bandwidth_size CceNodeV3#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.billingMode">billingMode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#billing_mode CceNodeV3#billing_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dockerBaseSize">dockerBaseSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#docker_base_size CceNodeV3#docker_base_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dockerLvmConfigOverride">dockerLvmConfigOverride</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#docker_lvm_config_override CceNodeV3#docker_lvm_config_override}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.ecsPerformanceType">ecsPerformanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#ecs_performance_type CceNodeV3#ecs_performance_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.eipCount">eipCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#eip_count CceNodeV3#eip_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.eipIds">eipIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#eip_ids CceNodeV3#eip_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.extendParamChargingMode">extendParamChargingMode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_param_charging_mode CceNodeV3#extend_param_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#id CceNodeV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.iptype">iptype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#iptype CceNodeV3#iptype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.k8STags">k8STags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#k8s_tags CceNodeV3#k8s_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#labels CceNodeV3#labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.maxPods">maxPods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#max_pods CceNodeV3#max_pods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#name CceNodeV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.orderId">orderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#order_id CceNodeV3#order_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.os">os</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#os CceNodeV3#os}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.postinstall">postinstall</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#postinstall CceNodeV3#postinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.preinstall">preinstall</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#preinstall CceNodeV3#preinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.privateIp">privateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#private_ip CceNodeV3#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.productId">productId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#product_id CceNodeV3#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.publicKey">publicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#public_key CceNodeV3#public_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#region CceNodeV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.runtime">runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#runtime CceNodeV3#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.sharetype">sharetype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#sharetype CceNodeV3#sharetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#subnet_id CceNodeV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#tags CceNodeV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.taints">taints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>[]</code> | taints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#availability_zone CceNodeV3#availability_zone}.

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#cluster_id CceNodeV3#cluster_id}.

---

##### `dataVolumes`<sup>Required</sup> <a name="dataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dataVolumes"></a>

```typescript
public readonly dataVolumes: IResolvable | CceNodeV3DataVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>[]

data_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#data_volumes CceNodeV3#data_volumes}

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#flavor_id CceNodeV3#flavor_id}.

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#key_pair CceNodeV3#key_pair}.

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.rootVolume"></a>

```typescript
public readonly rootVolume: CceNodeV3RootVolume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#root_volume CceNodeV3#root_volume}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#annotations CceNodeV3#annotations}.

---

##### `bandwidthChargeMode`<sup>Optional</sup> <a name="bandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.bandwidthChargeMode"></a>

```typescript
public readonly bandwidthChargeMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#bandwidth_charge_mode CceNodeV3#bandwidth_charge_mode}.

---

##### `bandwidthSize`<sup>Optional</sup> <a name="bandwidthSize" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.bandwidthSize"></a>

```typescript
public readonly bandwidthSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#bandwidth_size CceNodeV3#bandwidth_size}.

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.billingMode"></a>

```typescript
public readonly billingMode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#billing_mode CceNodeV3#billing_mode}.

---

##### `dockerBaseSize`<sup>Optional</sup> <a name="dockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dockerBaseSize"></a>

```typescript
public readonly dockerBaseSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#docker_base_size CceNodeV3#docker_base_size}.

---

##### `dockerLvmConfigOverride`<sup>Optional</sup> <a name="dockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.dockerLvmConfigOverride"></a>

```typescript
public readonly dockerLvmConfigOverride: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#docker_lvm_config_override CceNodeV3#docker_lvm_config_override}.

---

##### `ecsPerformanceType`<sup>Optional</sup> <a name="ecsPerformanceType" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.ecsPerformanceType"></a>

```typescript
public readonly ecsPerformanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#ecs_performance_type CceNodeV3#ecs_performance_type}.

---

##### `eipCount`<sup>Optional</sup> <a name="eipCount" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.eipCount"></a>

```typescript
public readonly eipCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#eip_count CceNodeV3#eip_count}.

---

##### `eipIds`<sup>Optional</sup> <a name="eipIds" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.eipIds"></a>

```typescript
public readonly eipIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#eip_ids CceNodeV3#eip_ids}.

---

##### `extendParamChargingMode`<sup>Optional</sup> <a name="extendParamChargingMode" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.extendParamChargingMode"></a>

```typescript
public readonly extendParamChargingMode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_param_charging_mode CceNodeV3#extend_param_charging_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#id CceNodeV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iptype`<sup>Optional</sup> <a name="iptype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.iptype"></a>

```typescript
public readonly iptype: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#iptype CceNodeV3#iptype}.

---

##### `k8STags`<sup>Optional</sup> <a name="k8STags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.k8STags"></a>

```typescript
public readonly k8STags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#k8s_tags CceNodeV3#k8s_tags}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#labels CceNodeV3#labels}.

---

##### `maxPods`<sup>Optional</sup> <a name="maxPods" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.maxPods"></a>

```typescript
public readonly maxPods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#max_pods CceNodeV3#max_pods}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#name CceNodeV3#name}.

---

##### `orderId`<sup>Optional</sup> <a name="orderId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.orderId"></a>

```typescript
public readonly orderId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#order_id CceNodeV3#order_id}.

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#os CceNodeV3#os}.

---

##### `postinstall`<sup>Optional</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.postinstall"></a>

```typescript
public readonly postinstall: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#postinstall CceNodeV3#postinstall}.

---

##### `preinstall`<sup>Optional</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.preinstall"></a>

```typescript
public readonly preinstall: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#preinstall CceNodeV3#preinstall}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#private_ip CceNodeV3#private_ip}.

---

##### `productId`<sup>Optional</sup> <a name="productId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#product_id CceNodeV3#product_id}.

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#public_key CceNodeV3#public_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#region CceNodeV3#region}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#runtime CceNodeV3#runtime}.

---

##### `sharetype`<sup>Optional</sup> <a name="sharetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.sharetype"></a>

```typescript
public readonly sharetype: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#sharetype CceNodeV3#sharetype}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#subnet_id CceNodeV3#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#tags CceNodeV3#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.taints"></a>

```typescript
public readonly taints: IResolvable | CceNodeV3Taints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>[]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#taints CceNodeV3#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: CceNodeV3Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#timeouts CceNodeV3#timeouts}

---

### CceNodeV3DataVolumes <a name="CceNodeV3DataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.Initializer"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodeV3DataVolumes: cceNodeV3.CceNodeV3DataVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#size CceNodeV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.volumetype">volumetype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.extendParam">extendParam</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.extendParams">extendParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.kmsId">kmsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#size CceNodeV3#size}.

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.volumetype"></a>

```typescript
public readonly volumetype: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}.

---

##### `extendParam`<sup>Optional</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.extendParam"></a>

```typescript
public readonly extendParam: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}.

---

##### `extendParams`<sup>Optional</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.extendParams"></a>

```typescript
public readonly extendParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}.

---

##### `kmsId`<sup>Optional</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}.

---

### CceNodeV3RootVolume <a name="CceNodeV3RootVolume" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.Initializer"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodeV3RootVolume: cceNodeV3.CceNodeV3RootVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#size CceNodeV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.volumetype">volumetype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.extendParam">extendParam</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.extendParams">extendParams</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.kmsId">kmsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#size CceNodeV3#size}.

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.volumetype"></a>

```typescript
public readonly volumetype: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#volumetype CceNodeV3#volumetype}.

---

##### `extendParam`<sup>Optional</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.extendParam"></a>

```typescript
public readonly extendParam: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_param CceNodeV3#extend_param}.

---

##### `extendParams`<sup>Optional</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.extendParams"></a>

```typescript
public readonly extendParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#extend_params CceNodeV3#extend_params}.

---

##### `kmsId`<sup>Optional</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#kms_id CceNodeV3#kms_id}.

---

### CceNodeV3Taints <a name="CceNodeV3Taints" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.Initializer"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodeV3Taints: cceNodeV3.CceNodeV3Taints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.effect">effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#effect CceNodeV3#effect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#key CceNodeV3#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#value CceNodeV3#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#effect CceNodeV3#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#key CceNodeV3#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#value CceNodeV3#value}.

---

### CceNodeV3Timeouts <a name="CceNodeV3Timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.Initializer"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

const cceNodeV3Timeouts: cceNodeV3.CceNodeV3Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#create CceNodeV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#delete CceNodeV3#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#create CceNodeV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/cce_node_v3#delete CceNodeV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CceNodeV3DataVolumesList <a name="CceNodeV3DataVolumesList" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeV3.CceNodeV3DataVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.get"></a>

```typescript
public get(index: number): CceNodeV3DataVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodeV3DataVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a>[]

---


### CceNodeV3DataVolumesOutputReference <a name="CceNodeV3DataVolumesOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeV3.CceNodeV3DataVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetExtendParam">resetExtendParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetExtendParams">resetExtendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetKmsId">resetKmsId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtendParam` <a name="resetExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetExtendParam"></a>

```typescript
public resetExtendParam(): void
```

##### `resetExtendParams` <a name="resetExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetExtendParams"></a>

```typescript
public resetExtendParams(): void
```

##### `resetKmsId` <a name="resetKmsId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.resetKmsId"></a>

```typescript
public resetKmsId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParamInput">extendParamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParamsInput">extendParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.kmsIdInput">kmsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.volumetypeInput">volumetypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParam">extendParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParams">extendParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.kmsId">kmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.volumetype">volumetype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extendParamInput`<sup>Optional</sup> <a name="extendParamInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParamInput"></a>

```typescript
public readonly extendParamInput: string;
```

- *Type:* string

---

##### `extendParamsInput`<sup>Optional</sup> <a name="extendParamsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParamsInput"></a>

```typescript
public readonly extendParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsIdInput`<sup>Optional</sup> <a name="kmsIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.kmsIdInput"></a>

```typescript
public readonly kmsIdInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `volumetypeInput`<sup>Optional</sup> <a name="volumetypeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.volumetypeInput"></a>

```typescript
public readonly volumetypeInput: string;
```

- *Type:* string

---

##### `extendParam`<sup>Required</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParam"></a>

```typescript
public readonly extendParam: string;
```

- *Type:* string

---

##### `extendParams`<sup>Required</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.extendParams"></a>

```typescript
public readonly extendParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.volumetype"></a>

```typescript
public readonly volumetype: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CceNodeV3DataVolumes | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3DataVolumes">CceNodeV3DataVolumes</a> | cdktf.IResolvable

---


### CceNodeV3RootVolumeOutputReference <a name="CceNodeV3RootVolumeOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeV3.CceNodeV3RootVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetExtendParam">resetExtendParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetExtendParams">resetExtendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetKmsId">resetKmsId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtendParam` <a name="resetExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetExtendParam"></a>

```typescript
public resetExtendParam(): void
```

##### `resetExtendParams` <a name="resetExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetExtendParams"></a>

```typescript
public resetExtendParams(): void
```

##### `resetKmsId` <a name="resetKmsId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.resetKmsId"></a>

```typescript
public resetKmsId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParamInput">extendParamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParamsInput">extendParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.kmsIdInput">kmsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.volumetypeInput">volumetypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParam">extendParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParams">extendParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.kmsId">kmsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.volumetype">volumetype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extendParamInput`<sup>Optional</sup> <a name="extendParamInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParamInput"></a>

```typescript
public readonly extendParamInput: string;
```

- *Type:* string

---

##### `extendParamsInput`<sup>Optional</sup> <a name="extendParamsInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParamsInput"></a>

```typescript
public readonly extendParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsIdInput`<sup>Optional</sup> <a name="kmsIdInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.kmsIdInput"></a>

```typescript
public readonly kmsIdInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `volumetypeInput`<sup>Optional</sup> <a name="volumetypeInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.volumetypeInput"></a>

```typescript
public readonly volumetypeInput: string;
```

- *Type:* string

---

##### `extendParam`<sup>Required</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParam"></a>

```typescript
public readonly extendParam: string;
```

- *Type:* string

---

##### `extendParams`<sup>Required</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.extendParams"></a>

```typescript
public readonly extendParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.kmsId"></a>

```typescript
public readonly kmsId: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.volumetype"></a>

```typescript
public readonly volumetype: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CceNodeV3RootVolume;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3RootVolume">CceNodeV3RootVolume</a>

---


### CceNodeV3TaintsList <a name="CceNodeV3TaintsList" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeV3.CceNodeV3TaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.get"></a>

```typescript
public get(index: number): CceNodeV3TaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CceNodeV3Taints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a>[]

---


### CceNodeV3TaintsOutputReference <a name="CceNodeV3TaintsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeV3.CceNodeV3TaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CceNodeV3Taints | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Taints">CceNodeV3Taints</a> | cdktf.IResolvable

---


### CceNodeV3TimeoutsOutputReference <a name="CceNodeV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer"></a>

```typescript
import { cceNodeV3 } from '@cdktf/provider-opentelekomcloud'

new cceNodeV3.CceNodeV3TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CceNodeV3Timeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeV3.CceNodeV3Timeouts">CceNodeV3Timeouts</a> | cdktf.IResolvable

---



