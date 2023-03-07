# `cceClusterV3` Submodule <a name="`cceClusterV3` Submodule" id="@cdktf/provider-opentelekomcloud.cceClusterV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CceClusterV3 <a name="CceClusterV3" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3 opentelekomcloud_cce_cluster_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

cceclusterv3.NewCceClusterV3(scope Construct, id *string, config CceClusterV3Config) CceClusterV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config">CceClusterV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config">CceClusterV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putAuthenticatingProxy">PutAuthenticatingProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxy">ResetAuthenticatingProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxyCa">ResetAuthenticatingProxyCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticationMode">ResetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetBillingMode">ResetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetClusterVersion">ResetClusterVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetContainerNetworkCidr">ResetContainerNetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEip">ResetEip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetCidr">ResetEniSubnetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetId">ResetEniSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetExtendParam">ResetExtendParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetHighwaySubnetId">ResetHighwaySubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreAddons">ResetIgnoreAddons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubeProxyMode">ResetKubeProxyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubernetesSvcIpRange">ResetKubernetesSvcIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetMultiAz">ResetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetNoAddons">ResetNoAddons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAuthenticatingProxy` <a name="PutAuthenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putAuthenticatingProxy"></a>

```go
func PutAuthenticatingProxy(value CceClusterV3AuthenticatingProxy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putAuthenticatingProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putTimeouts"></a>

```go
func PutTimeouts(value CceClusterV3Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetAuthenticatingProxy` <a name="ResetAuthenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxy"></a>

```go
func ResetAuthenticatingProxy()
```

##### `ResetAuthenticatingProxyCa` <a name="ResetAuthenticatingProxyCa" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxyCa"></a>

```go
func ResetAuthenticatingProxyCa()
```

##### `ResetAuthenticationMode` <a name="ResetAuthenticationMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticationMode"></a>

```go
func ResetAuthenticationMode()
```

##### `ResetBillingMode` <a name="ResetBillingMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetBillingMode"></a>

```go
func ResetBillingMode()
```

##### `ResetClusterVersion` <a name="ResetClusterVersion" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetClusterVersion"></a>

```go
func ResetClusterVersion()
```

##### `ResetContainerNetworkCidr` <a name="ResetContainerNetworkCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetContainerNetworkCidr"></a>

```go
func ResetContainerNetworkCidr()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEip` <a name="ResetEip" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEip"></a>

```go
func ResetEip()
```

##### `ResetEniSubnetCidr` <a name="ResetEniSubnetCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetCidr"></a>

```go
func ResetEniSubnetCidr()
```

##### `ResetEniSubnetId` <a name="ResetEniSubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetId"></a>

```go
func ResetEniSubnetId()
```

##### `ResetExtendParam` <a name="ResetExtendParam" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetExtendParam"></a>

```go
func ResetExtendParam()
```

##### `ResetHighwaySubnetId` <a name="ResetHighwaySubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetHighwaySubnetId"></a>

```go
func ResetHighwaySubnetId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreAddons` <a name="ResetIgnoreAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreAddons"></a>

```go
func ResetIgnoreAddons()
```

##### `ResetKubeProxyMode` <a name="ResetKubeProxyMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubeProxyMode"></a>

```go
func ResetKubeProxyMode()
```

##### `ResetKubernetesSvcIpRange` <a name="ResetKubernetesSvcIpRange" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubernetesSvcIpRange"></a>

```go
func ResetKubernetesSvcIpRange()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMultiAz` <a name="ResetMultiAz" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetMultiAz"></a>

```go
func ResetMultiAz()
```

##### `ResetNoAddons` <a name="ResetNoAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetNoAddons"></a>

```go
func ResetNoAddons()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

cceclusterv3.CceClusterV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

cceclusterv3.CceClusterV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

cceclusterv3.CceClusterV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxy">AuthenticatingProxy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference">CceClusterV3AuthenticatingProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateClusters">CertificateClusters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList">CceClusterV3CertificateClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateUsers">CertificateUsers</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList">CceClusterV3CertificateUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.external">External</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.externalOtc">ExternalOtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.installedAddons">InstalledAddons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.internal">Internal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupControl">SecurityGroupControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupNode">SecurityGroupNode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference">CceClusterV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCaInput">AuthenticatingProxyCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyInput">AuthenticatingProxyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingModeInput">BillingModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidrInput">ContainerNetworkCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkTypeInput">ContainerNetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eipInput">EipInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidrInput">EniSubnetCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetIdInput">EniSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParamInput">ExtendParamInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorIdInput">FlavorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetIdInput">HighwaySubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddonsInput">IgnoreAddonsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyModeInput">KubeProxyModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRangeInput">KubernetesSvcIpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAzInput">MultiAzInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddonsInput">NoAddonsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCa">AuthenticatingProxyCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationMode">AuthenticationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingMode">BillingMode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterType">ClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersion">ClusterVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidr">ContainerNetworkCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkType">ContainerNetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eip">Eip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidr">EniSubnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetId">EniSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParam">ExtendParam</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorId">FlavorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetId">HighwaySubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddons">IgnoreAddons</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyMode">KubeProxyMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRange">KubernetesSvcIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAz">MultiAz</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddons">NoAddons</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthenticatingProxy`<sup>Required</sup> <a name="AuthenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxy"></a>

```go
func AuthenticatingProxy() CceClusterV3AuthenticatingProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference">CceClusterV3AuthenticatingProxyOutputReference</a>

---

##### `CertificateClusters`<sup>Required</sup> <a name="CertificateClusters" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateClusters"></a>

```go
func CertificateClusters() CceClusterV3CertificateClustersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList">CceClusterV3CertificateClustersList</a>

---

##### `CertificateUsers`<sup>Required</sup> <a name="CertificateUsers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateUsers"></a>

```go
func CertificateUsers() CceClusterV3CertificateUsersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList">CceClusterV3CertificateUsersList</a>

---

##### `External`<sup>Required</sup> <a name="External" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.external"></a>

```go
func External() *string
```

- *Type:* *string

---

##### `ExternalOtc`<sup>Required</sup> <a name="ExternalOtc" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.externalOtc"></a>

```go
func ExternalOtc() *string
```

- *Type:* *string

---

##### `InstalledAddons`<sup>Required</sup> <a name="InstalledAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.installedAddons"></a>

```go
func InstalledAddons() *[]*string
```

- *Type:* *[]*string

---

##### `Internal`<sup>Required</sup> <a name="Internal" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.internal"></a>

```go
func Internal() *string
```

- *Type:* *string

---

##### `SecurityGroupControl`<sup>Required</sup> <a name="SecurityGroupControl" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupControl"></a>

```go
func SecurityGroupControl() *string
```

- *Type:* *string

---

##### `SecurityGroupNode`<sup>Required</sup> <a name="SecurityGroupNode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupNode"></a>

```go
func SecurityGroupNode() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeouts"></a>

```go
func Timeouts() CceClusterV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference">CceClusterV3TimeoutsOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthenticatingProxyCaInput`<sup>Optional</sup> <a name="AuthenticatingProxyCaInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCaInput"></a>

```go
func AuthenticatingProxyCaInput() *string
```

- *Type:* *string

---

##### `AuthenticatingProxyInput`<sup>Optional</sup> <a name="AuthenticatingProxyInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyInput"></a>

```go
func AuthenticatingProxyInput() CceClusterV3AuthenticatingProxy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationModeInput"></a>

```go
func AuthenticationModeInput() *string
```

- *Type:* *string

---

##### `BillingModeInput`<sup>Optional</sup> <a name="BillingModeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingModeInput"></a>

```go
func BillingModeInput() *f64
```

- *Type:* *f64

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterTypeInput"></a>

```go
func ClusterTypeInput() *string
```

- *Type:* *string

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersionInput"></a>

```go
func ClusterVersionInput() *string
```

- *Type:* *string

---

##### `ContainerNetworkCidrInput`<sup>Optional</sup> <a name="ContainerNetworkCidrInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidrInput"></a>

```go
func ContainerNetworkCidrInput() *string
```

- *Type:* *string

---

##### `ContainerNetworkTypeInput`<sup>Optional</sup> <a name="ContainerNetworkTypeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkTypeInput"></a>

```go
func ContainerNetworkTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EipInput`<sup>Optional</sup> <a name="EipInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eipInput"></a>

```go
func EipInput() *string
```

- *Type:* *string

---

##### `EniSubnetCidrInput`<sup>Optional</sup> <a name="EniSubnetCidrInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidrInput"></a>

```go
func EniSubnetCidrInput() *string
```

- *Type:* *string

---

##### `EniSubnetIdInput`<sup>Optional</sup> <a name="EniSubnetIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetIdInput"></a>

```go
func EniSubnetIdInput() *string
```

- *Type:* *string

---

##### `ExtendParamInput`<sup>Optional</sup> <a name="ExtendParamInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParamInput"></a>

```go
func ExtendParamInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FlavorIdInput`<sup>Optional</sup> <a name="FlavorIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorIdInput"></a>

```go
func FlavorIdInput() *string
```

- *Type:* *string

---

##### `HighwaySubnetIdInput`<sup>Optional</sup> <a name="HighwaySubnetIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetIdInput"></a>

```go
func HighwaySubnetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreAddonsInput`<sup>Optional</sup> <a name="IgnoreAddonsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddonsInput"></a>

```go
func IgnoreAddonsInput() interface{}
```

- *Type:* interface{}

---

##### `KubeProxyModeInput`<sup>Optional</sup> <a name="KubeProxyModeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyModeInput"></a>

```go
func KubeProxyModeInput() *string
```

- *Type:* *string

---

##### `KubernetesSvcIpRangeInput`<sup>Optional</sup> <a name="KubernetesSvcIpRangeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRangeInput"></a>

```go
func KubernetesSvcIpRangeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAzInput"></a>

```go
func MultiAzInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NoAddonsInput`<sup>Optional</sup> <a name="NoAddonsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddonsInput"></a>

```go
func NoAddonsInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthenticatingProxyCa`<sup>Required</sup> <a name="AuthenticatingProxyCa" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCa"></a>

```go
func AuthenticatingProxyCa() *string
```

- *Type:* *string

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationMode"></a>

```go
func AuthenticationMode() *string
```

- *Type:* *string

---

##### `BillingMode`<sup>Required</sup> <a name="BillingMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingMode"></a>

```go
func BillingMode() *f64
```

- *Type:* *f64

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterType"></a>

```go
func ClusterType() *string
```

- *Type:* *string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersion"></a>

```go
func ClusterVersion() *string
```

- *Type:* *string

---

##### `ContainerNetworkCidr`<sup>Required</sup> <a name="ContainerNetworkCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidr"></a>

```go
func ContainerNetworkCidr() *string
```

- *Type:* *string

---

##### `ContainerNetworkType`<sup>Required</sup> <a name="ContainerNetworkType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkType"></a>

```go
func ContainerNetworkType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Eip`<sup>Required</sup> <a name="Eip" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eip"></a>

```go
func Eip() *string
```

- *Type:* *string

---

##### `EniSubnetCidr`<sup>Required</sup> <a name="EniSubnetCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidr"></a>

```go
func EniSubnetCidr() *string
```

- *Type:* *string

---

##### `EniSubnetId`<sup>Required</sup> <a name="EniSubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetId"></a>

```go
func EniSubnetId() *string
```

- *Type:* *string

---

##### `ExtendParam`<sup>Required</sup> <a name="ExtendParam" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParam"></a>

```go
func ExtendParam() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorId"></a>

```go
func FlavorId() *string
```

- *Type:* *string

---

##### `HighwaySubnetId`<sup>Required</sup> <a name="HighwaySubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetId"></a>

```go
func HighwaySubnetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreAddons`<sup>Required</sup> <a name="IgnoreAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddons"></a>

```go
func IgnoreAddons() interface{}
```

- *Type:* interface{}

---

##### `KubeProxyMode`<sup>Required</sup> <a name="KubeProxyMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyMode"></a>

```go
func KubeProxyMode() *string
```

- *Type:* *string

---

##### `KubernetesSvcIpRange`<sup>Required</sup> <a name="KubernetesSvcIpRange" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRange"></a>

```go
func KubernetesSvcIpRange() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAz"></a>

```go
func MultiAz() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NoAddons`<sup>Required</sup> <a name="NoAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddons"></a>

```go
func NoAddons() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CceClusterV3AuthenticatingProxy <a name="CceClusterV3AuthenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

&cceclusterv3.CceClusterV3AuthenticatingProxy {
	Ca: *string,
	Cert: *string,
	PrivateKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.ca">Ca</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#ca CceClusterV3#ca}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.cert">Cert</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#cert CceClusterV3#cert}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#private_key CceClusterV3#private_key}. |

---

##### `Ca`<sup>Required</sup> <a name="Ca" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.ca"></a>

```go
Ca *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#ca CceClusterV3#ca}.

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.cert"></a>

```go
Cert *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#cert CceClusterV3#cert}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#private_key CceClusterV3#private_key}.

---

### CceClusterV3CertificateClusters <a name="CceClusterV3CertificateClusters" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

&cceclusterv3.CceClusterV3CertificateClusters {

}
```


### CceClusterV3CertificateUsers <a name="CceClusterV3CertificateUsers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

&cceclusterv3.CceClusterV3CertificateUsers {

}
```


### CceClusterV3Config <a name="CceClusterV3Config" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

&cceclusterv3.CceClusterV3Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterType: *string,
	ContainerNetworkType: *string,
	FlavorId: *string,
	Name: *string,
	SubnetId: *string,
	VpcId: *string,
	Annotations: *map[string]*string,
	AuthenticatingProxy: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy,
	AuthenticatingProxyCa: *string,
	AuthenticationMode: *string,
	BillingMode: *f64,
	ClusterVersion: *string,
	ContainerNetworkCidr: *string,
	Description: *string,
	Eip: *string,
	EniSubnetCidr: *string,
	EniSubnetId: *string,
	ExtendParam: *map[string]*string,
	HighwaySubnetId: *string,
	Id: *string,
	IgnoreAddons: interface{},
	KubeProxyMode: *string,
	KubernetesSvcIpRange: *string,
	Labels: *map[string]*string,
	MultiAz: interface{},
	NoAddons: interface{},
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.cceClusterV3.CceClusterV3Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterType">ClusterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#cluster_type CceClusterV3#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkType">ContainerNetworkType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#container_network_type CceClusterV3#container_network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.flavorId">FlavorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#flavor_id CceClusterV3#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#name CceClusterV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#subnet_id CceClusterV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#vpc_id CceClusterV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#annotations CceClusterV3#annotations}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxy">AuthenticatingProxy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a></code> | authenticating_proxy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxyCa">AuthenticatingProxyCa</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticationMode">AuthenticationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#authentication_mode CceClusterV3#authentication_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.billingMode">BillingMode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#billing_mode CceClusterV3#billing_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterVersion">ClusterVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#cluster_version CceClusterV3#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkCidr">ContainerNetworkCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#container_network_cidr CceClusterV3#container_network_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#description CceClusterV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eip">Eip</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#eip CceClusterV3#eip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetCidr">EniSubnetCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#eni_subnet_cidr CceClusterV3#eni_subnet_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetId">EniSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#eni_subnet_id CceClusterV3#eni_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.extendParam">ExtendParam</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#extend_param CceClusterV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.highwaySubnetId">HighwaySubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#highway_subnet_id CceClusterV3#highway_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#id CceClusterV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreAddons">IgnoreAddons</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#ignore_addons CceClusterV3#ignore_addons}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubeProxyMode">KubeProxyMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#kube_proxy_mode CceClusterV3#kube_proxy_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubernetesSvcIpRange">KubernetesSvcIpRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#kubernetes_svc_ip_range CceClusterV3#kubernetes_svc_ip_range}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#labels CceClusterV3#labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.multiAz">MultiAz</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#multi_az CceClusterV3#multi_az}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.noAddons">NoAddons</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#no_addons CceClusterV3#no_addons}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#region CceClusterV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterType"></a>

```go
ClusterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#cluster_type CceClusterV3#cluster_type}.

---

##### `ContainerNetworkType`<sup>Required</sup> <a name="ContainerNetworkType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkType"></a>

```go
ContainerNetworkType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#container_network_type CceClusterV3#container_network_type}.

---

##### `FlavorId`<sup>Required</sup> <a name="FlavorId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.flavorId"></a>

```go
FlavorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#flavor_id CceClusterV3#flavor_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#name CceClusterV3#name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#subnet_id CceClusterV3#subnet_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#vpc_id CceClusterV3#vpc_id}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#annotations CceClusterV3#annotations}.

---

##### `AuthenticatingProxy`<sup>Optional</sup> <a name="AuthenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxy"></a>

```go
AuthenticatingProxy CceClusterV3AuthenticatingProxy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

authenticating_proxy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#authenticating_proxy CceClusterV3#authenticating_proxy}

---

##### `AuthenticatingProxyCa`<sup>Optional</sup> <a name="AuthenticatingProxyCa" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxyCa"></a>

```go
AuthenticatingProxyCa *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}.

---

##### `AuthenticationMode`<sup>Optional</sup> <a name="AuthenticationMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticationMode"></a>

```go
AuthenticationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#authentication_mode CceClusterV3#authentication_mode}.

---

##### `BillingMode`<sup>Optional</sup> <a name="BillingMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.billingMode"></a>

```go
BillingMode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#billing_mode CceClusterV3#billing_mode}.

---

##### `ClusterVersion`<sup>Optional</sup> <a name="ClusterVersion" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterVersion"></a>

```go
ClusterVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#cluster_version CceClusterV3#cluster_version}.

---

##### `ContainerNetworkCidr`<sup>Optional</sup> <a name="ContainerNetworkCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkCidr"></a>

```go
ContainerNetworkCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#container_network_cidr CceClusterV3#container_network_cidr}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#description CceClusterV3#description}.

---

##### `Eip`<sup>Optional</sup> <a name="Eip" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eip"></a>

```go
Eip *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#eip CceClusterV3#eip}.

---

##### `EniSubnetCidr`<sup>Optional</sup> <a name="EniSubnetCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetCidr"></a>

```go
EniSubnetCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#eni_subnet_cidr CceClusterV3#eni_subnet_cidr}.

---

##### `EniSubnetId`<sup>Optional</sup> <a name="EniSubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetId"></a>

```go
EniSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#eni_subnet_id CceClusterV3#eni_subnet_id}.

---

##### `ExtendParam`<sup>Optional</sup> <a name="ExtendParam" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.extendParam"></a>

```go
ExtendParam *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#extend_param CceClusterV3#extend_param}.

---

##### `HighwaySubnetId`<sup>Optional</sup> <a name="HighwaySubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.highwaySubnetId"></a>

```go
HighwaySubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#highway_subnet_id CceClusterV3#highway_subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#id CceClusterV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreAddons`<sup>Optional</sup> <a name="IgnoreAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreAddons"></a>

```go
IgnoreAddons interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#ignore_addons CceClusterV3#ignore_addons}.

---

##### `KubeProxyMode`<sup>Optional</sup> <a name="KubeProxyMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubeProxyMode"></a>

```go
KubeProxyMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#kube_proxy_mode CceClusterV3#kube_proxy_mode}.

---

##### `KubernetesSvcIpRange`<sup>Optional</sup> <a name="KubernetesSvcIpRange" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubernetesSvcIpRange"></a>

```go
KubernetesSvcIpRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#kubernetes_svc_ip_range CceClusterV3#kubernetes_svc_ip_range}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#labels CceClusterV3#labels}.

---

##### `MultiAz`<sup>Optional</sup> <a name="MultiAz" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.multiAz"></a>

```go
MultiAz interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#multi_az CceClusterV3#multi_az}.

---

##### `NoAddons`<sup>Optional</sup> <a name="NoAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.noAddons"></a>

```go
NoAddons interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#no_addons CceClusterV3#no_addons}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#region CceClusterV3#region}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.timeouts"></a>

```go
Timeouts CceClusterV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#timeouts CceClusterV3#timeouts}

---

### CceClusterV3Timeouts <a name="CceClusterV3Timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

&cceclusterv3.CceClusterV3Timeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#create CceClusterV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#delete CceClusterV3#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#create CceClusterV3#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3#delete CceClusterV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CceClusterV3AuthenticatingProxyOutputReference <a name="CceClusterV3AuthenticatingProxyOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

cceclusterv3.NewCceClusterV3AuthenticatingProxyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CceClusterV3AuthenticatingProxyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.caInput">CaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.certInput">CertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.ca">Ca</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.cert">Cert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaInput`<sup>Optional</sup> <a name="CaInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.caInput"></a>

```go
func CaInput() *string
```

- *Type:* *string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.certInput"></a>

```go
func CertInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `Ca`<sup>Required</sup> <a name="Ca" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.ca"></a>

```go
func Ca() *string
```

- *Type:* *string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.cert"></a>

```go
func Cert() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.internalValue"></a>

```go
func InternalValue() CceClusterV3AuthenticatingProxy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

---


### CceClusterV3CertificateClustersList <a name="CceClusterV3CertificateClustersList" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

cceclusterv3.NewCceClusterV3CertificateClustersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CceClusterV3CertificateClustersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.get"></a>

```go
func Get(index *f64) CceClusterV3CertificateClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CceClusterV3CertificateClustersOutputReference <a name="CceClusterV3CertificateClustersOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

cceclusterv3.NewCceClusterV3CertificateClustersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CceClusterV3CertificateClustersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.certificateAuthorityData">CertificateAuthorityData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.server">Server</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters">CceClusterV3CertificateClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateAuthorityData`<sup>Required</sup> <a name="CertificateAuthorityData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.certificateAuthorityData"></a>

```go
func CertificateAuthorityData() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.server"></a>

```go
func Server() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.internalValue"></a>

```go
func InternalValue() CceClusterV3CertificateClusters
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters">CceClusterV3CertificateClusters</a>

---


### CceClusterV3CertificateUsersList <a name="CceClusterV3CertificateUsersList" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

cceclusterv3.NewCceClusterV3CertificateUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CceClusterV3CertificateUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.get"></a>

```go
func Get(index *f64) CceClusterV3CertificateUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CceClusterV3CertificateUsersOutputReference <a name="CceClusterV3CertificateUsersOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

cceclusterv3.NewCceClusterV3CertificateUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CceClusterV3CertificateUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientCertificateData">ClientCertificateData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientKeyData">ClientKeyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers">CceClusterV3CertificateUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientCertificateData`<sup>Required</sup> <a name="ClientCertificateData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientCertificateData"></a>

```go
func ClientCertificateData() *string
```

- *Type:* *string

---

##### `ClientKeyData`<sup>Required</sup> <a name="ClientKeyData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientKeyData"></a>

```go
func ClientKeyData() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() CceClusterV3CertificateUsers
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers">CceClusterV3CertificateUsers</a>

---


### CceClusterV3TimeoutsOutputReference <a name="CceClusterV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/cceclusterv3"

cceclusterv3.NewCceClusterV3TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CceClusterV3TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



