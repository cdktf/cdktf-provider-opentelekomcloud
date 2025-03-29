# `apigwGatewayV2` Submodule <a name="`apigwGatewayV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwGatewayV2 <a name="ApigwGatewayV2" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2 opentelekomcloud_apigw_gateway_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_gateway_v2.ApigwGatewayV2;

ApigwGatewayV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .availabilityZones(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .securityGroupId(java.lang.String)
    .specId(java.lang.String)
    .subnetId(java.lang.String)
    .vpcId(java.lang.String)
//  .bandwidthChargingMode(java.lang.String)
//  .bandwidthSize(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ingressBandwidthChargingMode(java.lang.String)
//  .ingressBandwidthSize(java.lang.Number)
//  .loadbalancerProvider(java.lang.String)
//  .maintainBegin(java.lang.String)
//  .timeouts(ApigwGatewayV2Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#availability_zones ApigwGatewayV2#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#name ApigwGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#security_group_id ApigwGatewayV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.specId">specId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#spec_id ApigwGatewayV2#spec_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#subnet_id ApigwGatewayV2#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#vpc_id ApigwGatewayV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.bandwidthChargingMode">bandwidthChargingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#bandwidth_charging_mode ApigwGatewayV2#bandwidth_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.bandwidthSize">bandwidthSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#bandwidth_size ApigwGatewayV2#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#description ApigwGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#id ApigwGatewayV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.ingressBandwidthChargingMode">ingressBandwidthChargingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#ingress_bandwidth_charging_mode ApigwGatewayV2#ingress_bandwidth_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.ingressBandwidthSize">ingressBandwidthSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#ingress_bandwidth_size ApigwGatewayV2#ingress_bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.loadbalancerProvider">loadbalancerProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#loadbalancer_provider ApigwGatewayV2#loadbalancer_provider}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.maintainBegin">maintainBegin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#maintain_begin ApigwGatewayV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#availability_zones ApigwGatewayV2#availability_zones}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#name ApigwGatewayV2#name}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.securityGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#security_group_id ApigwGatewayV2#security_group_id}.

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.specId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#spec_id ApigwGatewayV2#spec_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#subnet_id ApigwGatewayV2#subnet_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#vpc_id ApigwGatewayV2#vpc_id}.

---

##### `bandwidthChargingMode`<sup>Optional</sup> <a name="bandwidthChargingMode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.bandwidthChargingMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#bandwidth_charging_mode ApigwGatewayV2#bandwidth_charging_mode}.

---

##### `bandwidthSize`<sup>Optional</sup> <a name="bandwidthSize" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.bandwidthSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#bandwidth_size ApigwGatewayV2#bandwidth_size}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#description ApigwGatewayV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#id ApigwGatewayV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressBandwidthChargingMode`<sup>Optional</sup> <a name="ingressBandwidthChargingMode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.ingressBandwidthChargingMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#ingress_bandwidth_charging_mode ApigwGatewayV2#ingress_bandwidth_charging_mode}.

---

##### `ingressBandwidthSize`<sup>Optional</sup> <a name="ingressBandwidthSize" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.ingressBandwidthSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#ingress_bandwidth_size ApigwGatewayV2#ingress_bandwidth_size}.

---

##### `loadbalancerProvider`<sup>Optional</sup> <a name="loadbalancerProvider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.loadbalancerProvider"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#loadbalancer_provider ApigwGatewayV2#loadbalancer_provider}.

---

##### `maintainBegin`<sup>Optional</sup> <a name="maintainBegin" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.maintainBegin"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#maintain_begin ApigwGatewayV2#maintain_begin}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#timeouts ApigwGatewayV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetBandwidthChargingMode">resetBandwidthChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetBandwidthSize">resetBandwidthSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetIngressBandwidthChargingMode">resetIngressBandwidthChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetIngressBandwidthSize">resetIngressBandwidthSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetLoadbalancerProvider">resetLoadbalancerProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetMaintainBegin">resetMaintainBegin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.putTimeouts"></a>

```java
public void putTimeouts(ApigwGatewayV2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a>

---

##### `resetBandwidthChargingMode` <a name="resetBandwidthChargingMode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetBandwidthChargingMode"></a>

```java
public void resetBandwidthChargingMode()
```

##### `resetBandwidthSize` <a name="resetBandwidthSize" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetBandwidthSize"></a>

```java
public void resetBandwidthSize()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetId"></a>

```java
public void resetId()
```

##### `resetIngressBandwidthChargingMode` <a name="resetIngressBandwidthChargingMode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetIngressBandwidthChargingMode"></a>

```java
public void resetIngressBandwidthChargingMode()
```

##### `resetIngressBandwidthSize` <a name="resetIngressBandwidthSize" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetIngressBandwidthSize"></a>

```java
public void resetIngressBandwidthSize()
```

##### `resetLoadbalancerProvider` <a name="resetLoadbalancerProvider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetLoadbalancerProvider"></a>

```java
public void resetLoadbalancerProvider()
```

##### `resetMaintainBegin` <a name="resetMaintainBegin" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetMaintainBegin"></a>

```java
public void resetMaintainBegin()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigwGatewayV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_gateway_v2.ApigwGatewayV2;

ApigwGatewayV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_gateway_v2.ApigwGatewayV2;

ApigwGatewayV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_gateway_v2.ApigwGatewayV2;

ApigwGatewayV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_gateway_v2.ApigwGatewayV2;

ApigwGatewayV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigwGatewayV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApigwGatewayV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigwGatewayV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigwGatewayV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApigwGatewayV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainEnd">maintainEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.privateEgressAddresses">privateEgressAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.publicEgressAddress">publicEgressAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.supportedFeatures">supportedFeatures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference">ApigwGatewayV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcepServiceName">vpcepServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcIngressAddress">vpcIngressAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthChargingModeInput">bandwidthChargingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthSizeInput">bandwidthSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthChargingModeInput">ingressBandwidthChargingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthSizeInput">ingressBandwidthSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.loadbalancerProviderInput">loadbalancerProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainBeginInput">maintainBeginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.specIdInput">specIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthChargingMode">bandwidthChargingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthSize">bandwidthSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthChargingMode">ingressBandwidthChargingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthSize">ingressBandwidthSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.loadbalancerProvider">loadbalancerProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainBegin">maintainBegin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.specId">specId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maintainEnd`<sup>Required</sup> <a name="maintainEnd" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainEnd"></a>

```java
public java.lang.String getMaintainEnd();
```

- *Type:* java.lang.String

---

##### `privateEgressAddresses`<sup>Required</sup> <a name="privateEgressAddresses" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.privateEgressAddresses"></a>

```java
public java.util.List<java.lang.String> getPrivateEgressAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `publicEgressAddress`<sup>Required</sup> <a name="publicEgressAddress" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.publicEgressAddress"></a>

```java
public java.lang.String getPublicEgressAddress();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `supportedFeatures`<sup>Required</sup> <a name="supportedFeatures" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.supportedFeatures"></a>

```java
public java.util.List<java.lang.String> getSupportedFeatures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.timeouts"></a>

```java
public ApigwGatewayV2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference">ApigwGatewayV2TimeoutsOutputReference</a>

---

##### `vpcepServiceName`<sup>Required</sup> <a name="vpcepServiceName" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcepServiceName"></a>

```java
public java.lang.String getVpcepServiceName();
```

- *Type:* java.lang.String

---

##### `vpcIngressAddress`<sup>Required</sup> <a name="vpcIngressAddress" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcIngressAddress"></a>

```java
public java.lang.String getVpcIngressAddress();
```

- *Type:* java.lang.String

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bandwidthChargingModeInput`<sup>Optional</sup> <a name="bandwidthChargingModeInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthChargingModeInput"></a>

```java
public java.lang.String getBandwidthChargingModeInput();
```

- *Type:* java.lang.String

---

##### `bandwidthSizeInput`<sup>Optional</sup> <a name="bandwidthSizeInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthSizeInput"></a>

```java
public java.lang.Number getBandwidthSizeInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressBandwidthChargingModeInput`<sup>Optional</sup> <a name="ingressBandwidthChargingModeInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthChargingModeInput"></a>

```java
public java.lang.String getIngressBandwidthChargingModeInput();
```

- *Type:* java.lang.String

---

##### `ingressBandwidthSizeInput`<sup>Optional</sup> <a name="ingressBandwidthSizeInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthSizeInput"></a>

```java
public java.lang.Number getIngressBandwidthSizeInput();
```

- *Type:* java.lang.Number

---

##### `loadbalancerProviderInput`<sup>Optional</sup> <a name="loadbalancerProviderInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.loadbalancerProviderInput"></a>

```java
public java.lang.String getLoadbalancerProviderInput();
```

- *Type:* java.lang.String

---

##### `maintainBeginInput`<sup>Optional</sup> <a name="maintainBeginInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainBeginInput"></a>

```java
public java.lang.String getMaintainBeginInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `specIdInput`<sup>Optional</sup> <a name="specIdInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.specIdInput"></a>

```java
public java.lang.String getSpecIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bandwidthChargingMode`<sup>Required</sup> <a name="bandwidthChargingMode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthChargingMode"></a>

```java
public java.lang.String getBandwidthChargingMode();
```

- *Type:* java.lang.String

---

##### `bandwidthSize`<sup>Required</sup> <a name="bandwidthSize" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthSize"></a>

```java
public java.lang.Number getBandwidthSize();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingressBandwidthChargingMode`<sup>Required</sup> <a name="ingressBandwidthChargingMode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthChargingMode"></a>

```java
public java.lang.String getIngressBandwidthChargingMode();
```

- *Type:* java.lang.String

---

##### `ingressBandwidthSize`<sup>Required</sup> <a name="ingressBandwidthSize" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthSize"></a>

```java
public java.lang.Number getIngressBandwidthSize();
```

- *Type:* java.lang.Number

---

##### `loadbalancerProvider`<sup>Required</sup> <a name="loadbalancerProvider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.loadbalancerProvider"></a>

```java
public java.lang.String getLoadbalancerProvider();
```

- *Type:* java.lang.String

---

##### `maintainBegin`<sup>Required</sup> <a name="maintainBegin" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainBegin"></a>

```java
public java.lang.String getMaintainBegin();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.specId"></a>

```java
public java.lang.String getSpecId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwGatewayV2Config <a name="ApigwGatewayV2Config" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_gateway_v2.ApigwGatewayV2Config;

ApigwGatewayV2Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .availabilityZones(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .securityGroupId(java.lang.String)
    .specId(java.lang.String)
    .subnetId(java.lang.String)
    .vpcId(java.lang.String)
//  .bandwidthChargingMode(java.lang.String)
//  .bandwidthSize(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ingressBandwidthChargingMode(java.lang.String)
//  .ingressBandwidthSize(java.lang.Number)
//  .loadbalancerProvider(java.lang.String)
//  .maintainBegin(java.lang.String)
//  .timeouts(ApigwGatewayV2Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#availability_zones ApigwGatewayV2#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#name ApigwGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#security_group_id ApigwGatewayV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.specId">specId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#spec_id ApigwGatewayV2#spec_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#subnet_id ApigwGatewayV2#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#vpc_id ApigwGatewayV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.bandwidthChargingMode">bandwidthChargingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#bandwidth_charging_mode ApigwGatewayV2#bandwidth_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.bandwidthSize">bandwidthSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#bandwidth_size ApigwGatewayV2#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#description ApigwGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#id ApigwGatewayV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.ingressBandwidthChargingMode">ingressBandwidthChargingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#ingress_bandwidth_charging_mode ApigwGatewayV2#ingress_bandwidth_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.ingressBandwidthSize">ingressBandwidthSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#ingress_bandwidth_size ApigwGatewayV2#ingress_bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.loadbalancerProvider">loadbalancerProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#loadbalancer_provider ApigwGatewayV2#loadbalancer_provider}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.maintainBegin">maintainBegin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#maintain_begin ApigwGatewayV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#availability_zones ApigwGatewayV2#availability_zones}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#name ApigwGatewayV2#name}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#security_group_id ApigwGatewayV2#security_group_id}.

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.specId"></a>

```java
public java.lang.String getSpecId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#spec_id ApigwGatewayV2#spec_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#subnet_id ApigwGatewayV2#subnet_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#vpc_id ApigwGatewayV2#vpc_id}.

---

##### `bandwidthChargingMode`<sup>Optional</sup> <a name="bandwidthChargingMode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.bandwidthChargingMode"></a>

```java
public java.lang.String getBandwidthChargingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#bandwidth_charging_mode ApigwGatewayV2#bandwidth_charging_mode}.

---

##### `bandwidthSize`<sup>Optional</sup> <a name="bandwidthSize" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.bandwidthSize"></a>

```java
public java.lang.Number getBandwidthSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#bandwidth_size ApigwGatewayV2#bandwidth_size}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#description ApigwGatewayV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#id ApigwGatewayV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressBandwidthChargingMode`<sup>Optional</sup> <a name="ingressBandwidthChargingMode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.ingressBandwidthChargingMode"></a>

```java
public java.lang.String getIngressBandwidthChargingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#ingress_bandwidth_charging_mode ApigwGatewayV2#ingress_bandwidth_charging_mode}.

---

##### `ingressBandwidthSize`<sup>Optional</sup> <a name="ingressBandwidthSize" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.ingressBandwidthSize"></a>

```java
public java.lang.Number getIngressBandwidthSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#ingress_bandwidth_size ApigwGatewayV2#ingress_bandwidth_size}.

---

##### `loadbalancerProvider`<sup>Optional</sup> <a name="loadbalancerProvider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.loadbalancerProvider"></a>

```java
public java.lang.String getLoadbalancerProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#loadbalancer_provider ApigwGatewayV2#loadbalancer_provider}.

---

##### `maintainBegin`<sup>Optional</sup> <a name="maintainBegin" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.maintainBegin"></a>

```java
public java.lang.String getMaintainBegin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#maintain_begin ApigwGatewayV2#maintain_begin}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.timeouts"></a>

```java
public ApigwGatewayV2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#timeouts ApigwGatewayV2#timeouts}

---

### ApigwGatewayV2Timeouts <a name="ApigwGatewayV2Timeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_gateway_v2.ApigwGatewayV2Timeouts;

ApigwGatewayV2Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#create ApigwGatewayV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#delete ApigwGatewayV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#update ApigwGatewayV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#create ApigwGatewayV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#delete ApigwGatewayV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/apigw_gateway_v2#update ApigwGatewayV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwGatewayV2TimeoutsOutputReference <a name="ApigwGatewayV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_gateway_v2.ApigwGatewayV2TimeoutsOutputReference;

new ApigwGatewayV2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a>

---



